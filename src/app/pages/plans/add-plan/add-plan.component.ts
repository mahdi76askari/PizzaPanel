import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { SelectComponent } from '../../../components/elements/forms/select/select.component';
import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlansService } from '../../../services/http/plans.service';

@Component({
  selector: 'app-add-plan',
  standalone: true,
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css'],
  imports: [InputTextComponent, SelectComponent, ButtonComponent, RouterModule],
})
export class AddPlanComponent implements OnInit {
  form = new FormGroup({
    planName: new FormControl(),
    selectedAreaPolygon: new FormControl(),
    deliveryFee: new FormControl(),
    guaranteeReturnTimeHalf: new FormControl(),
    guaranteeReturnTimeFull: new FormControl(),
    planPrice: new FormControl(),
    durationInMonths: new FormControl(),
    productPriceLevel: new FormControl(),
    isActive: new FormControl(),
    allowsFloatingAddress: new FormControl(),
    allowedAddressChanges: new FormControl(),
  });

  map: any;
  draw: any;
  lng = 51.66794973002524;
  lat = 32.64609688642658;

  userLevels = [
    {
      name: 'سطح اول',
      value: '1',
    },
    {
      name: 'سطح دوم',
      value: '2',
    },
    {
      name: 'سطح سوم',
      value: '3',
    },
    {
      name: 'سطح چهارم',
      value: '4',
    },
  ];

  addresschangeOptions = [
    {
      name: 'اجازه دارد',
      value: 'true',
    },
    {
      name: 'اجازه ندارد ',
      value: 'false',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private plansService: PlansService
  ) {}

  ngOnInit() {
    this.route.params.subscribe({
      next: (v: any) => {
        if (v.plan) {
          this.getPlan(v.plan);
        }
      },
    });

    this.mapInit();
  }

  getPlan(param: any) {
    this.plansService.getPlan(param).subscribe({
      next: (v: any) => {
        this.form.patchValue({
          deliveryFee: v.data.deliveryFee,
          durationInMonths: v.data.durationInMonths,
          guaranteeReturnTimeFull: v.data.guaranteeReturnTimeFull,
          guaranteeReturnTimeHalf: v.data.guaranteeReturnTimeHalf,
          planName: v.data.planName,
          planPrice: v.data.planPrice,
          selectedAreaPolygon: v.data.selectedAreaPolygon,
        });
      },
    });
  }

  save() {
    console.log(this.draw.getAll());
  }

  mapInit() {
    this.map = new nmp_mapboxgl.Map({
      mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
      container: 'map',
      zoom: 11,
      pitch: 0,
      center: [this.lng, this.lat],
      minZoom: 2,
      maxZoom: 21,
      trackResize: true,
      mapKey: 'web.9cd94f4cdac64133b364b617c34e7552',
      poi: false,
      traffic: false,
      mapTypeControllerOptions: {
        show: true,
        position: 'bottom-left',
      },
    });

    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
        polygon: true,
        trash: true,
      },

      styles: [
        {
          id: 'gl-draw-polygon-fill',
          type: 'fill',
          filter: ['all', ['==', '$type', 'Polygon'], ['!=', 'mode', 'static']],
          paint: {
            'fill-color': '#008000', // Polygon fill color
            'fill-opacity': 0.5, // Polygon fill opacity
          },
        },
        // Style for polygon stroke
        {
          id: 'gl-draw-polygon-stroke',
          type: 'line',
          filter: ['all', ['==', '$type', 'Polygon'], ['!=', 'mode', 'static']],
          paint: {
            'line-color': '#FF0000', // Polygon stroke color
            'line-width': 2, // Polygon stroke width
          },
        },
        // Style for points
        {
          id: 'gl-draw-point',
          type: 'circle',
          filter: ['all', ['==', '$type', 'Point'], ['!=', 'mode', 'static']],
          paint: {
            'circle-radius': 10, // Point size
            'circle-color': '#ffff00', // Point color
          },
        },
      ],

      // Set mapbox-gl-draw to draw by default.
      // The user does not have to click the polygon control button first.
      defaultMode: 'draw_polygon',
    });
    this.map.addControl(this.draw);
  }
}
