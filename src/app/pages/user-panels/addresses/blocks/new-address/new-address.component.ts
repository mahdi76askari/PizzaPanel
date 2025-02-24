import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../../../components/elements/forms/input-text/input-text.component';
import { ButtonComponent } from '../../../../../components/elements/button/button/button.component';
import { DialogRef } from '@angular/cdk/dialog';
import { AddressService } from '../../../../../services/http/address.service';
import { FormControl, FormGroup } from '@angular/forms';
import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';
import { SelectComponent } from '../../../../../components/elements/forms/select/select.component';
import { AccountService } from '../../../../../services/http/account.service';
import { AlertService } from '../../../../../services/tools/alert.service';

@Component({
  selector: 'app-new-address',
  standalone: true,
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css'],
  imports: [InputTextComponent, ButtonComponent, SelectComponent],
})
export class NewAddressComponent implements OnInit, AfterViewInit {
  dialogRef = inject(DialogRef<NewAddressComponent>);

  formGroup = new FormGroup({
    caption: new FormControl(''),
    addressDetail: new FormControl(''),
    plaque: new FormControl(''),
    unit: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    addressType: new FormControl('1'),
  });

  map: any;

  marker: any;

  lng = 51.66794973002524;
  lat = 32.64609688642658;

  addressType = [
    {
      name: 'آدرس ثابت',
      value: '1',
    },
    {
      name: 'آدرس شناور',
      value: '2',
    },
  ];

  constructor(
    private addressService: AddressService,
    private accountService: AccountService,
    private alert: AlertService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
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

    this.map.on('click', (e: any) => {
      console.log(e.lngLat);
      this.addMarker(e.lngLat);
    });

    this.marker = new nmp_mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
  }

  addMarker(lnglat: any) {
    this.marker.remove();

    this.lat = lnglat.lat;
    this.lng = lnglat.lng;

    this.marker = new nmp_mapboxgl.Marker()
      .setLngLat([lnglat.lng, lnglat.lat])
      .addTo(this.map);
  }

  submit() {
    const body = {
      caption: this.formGroup.controls.caption.value,
      addressDetail: this.formGroup.controls.addressDetail.value,
      plaque: this.formGroup.controls.plaque.value,
      unit: this.formGroup.controls.unit.value,
      addressType: Number(this.formGroup.controls.addressType.value),
      latitude: this.lat,
      longitude: this.lng,
    };
    this.accountService.assignAddress(body).subscribe({
      next: (v: any) => {
        this.dialogRef.close();
      },
      error: (e: any) => {
        this.alert.error({ title: e.error.message, msg: '' });
      },
    });
  }
}
