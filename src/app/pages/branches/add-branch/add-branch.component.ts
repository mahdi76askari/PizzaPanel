import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../components/elements/forms/input-text/input-text.component';
import { SelectComponent } from '../../../components/elements/forms/select/select.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TimeRangeComponent } from './time-range/time-range.component';
import { AdminService } from '../../../services/http/admin.service';
import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';
import { BranchManagerService } from '../../../services/http/branchManager.service';
import { BranchService } from '../../../services/http/branch.service';
import { AlertService } from '../../../services/tools/alert.service';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
  imports: [
    InputTextComponent,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule,
    TimeRangeComponent,
  ],
})
export class AddBranchComponent implements OnInit, AfterViewInit {
  saturdayMorningFrom = '09:00';
  saturdayMorningTo = '12:00';
  saturdayEveningFrom = '16:00';
  saturdayEveningTo = '23:00';
  // sunday
  sundayMorningFrom = '09:00';
  sundayMorningTo = '12:00';
  sundayEveningFrom = '16:00';
  sundayEveningTo = '23:00';
  // monday
  mondayMorningFrom = '09:00';
  mondayMorningTo = '12:00';
  mondayEveningFrom = '16:00';
  mondayEveningTo = '23:00';
  // tuesday
  tuesdayMorningFrom = '09:00';
  tuesdayMorningTo = '12:00';
  tuesdayEveningFrom = '16:00';
  tuesdayEveningTo = '23:00';
  //wednesday
  wednesdayMorningFrom = '09:00';
  wednesdayMorningTo = '12:00';
  wednesdayEveningFrom = '16:00';
  wednesdayEveningTo = '23:00';
  // thursday
  thursdayMorningFrom = '09:00';
  thursdayMorningTo = '12:00';
  thursdayEveningFrom = '16:00';
  thursdayEveningTo = '23:00';
  //friday
  fridayMorningFrom = '09:00';
  fridayMorningTo = '12:00';
  fridayEveningFrom = '16:00';
  fridayEveningTo = '23:00';

  form = new FormGroup({
    caption: new FormControl(),
    addressDetail: new FormControl(),
    plaque: new FormControl(),
    unit: new FormControl(),
    mangerUserId: new FormControl(),
  });

  users: any;

  lng = 51.66794973002524;
  lat = 32.64609688642658;
  map: any;
  marker: any;
  constructor(
    private AdminService: AdminService,
    private branchService: BranchService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getBranchManagers();
  }

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

  getBranchManagers() {
    this.AdminService.getUsers('?role=BranchManager').subscribe({
      next: (v: any) => {
        this.users = v.data.map((user: any) => {
          return {
            name: user.firstNameAndLastName,
            value: user.userId,
          };
        });
      },
    });
  }

  save() {
    const body = {
      address: {
        caption: this.form.controls.caption,
        addressDetail: this.form.controls.addressDetail,
        plaque: this.form.controls.plaque,
        unit: this.form.controls.unit,
        latitude: this.lat,
        longitude: this.lng,
      },
      mangerUserId: this.form.controls.mangerUserId,
      workingHours: [
        {
          dayOfWeek: 0,
          morningOpeningTime: this.saturdayMorningFrom,
          morningClosingTime: this.saturdayMorningTo,
          eveningOpeningTime: this.saturdayEveningFrom,
          eveningClosingTime: this.saturdayEveningTo,
        },
        {
          dayOfWeek: 1,
          morningOpeningTime: this.saturdayMorningFrom,
          morningClosingTime: this.saturdayMorningTo,
          eveningOpeningTime: this.saturdayEveningFrom,
          eveningClosingTime: this.saturdayEveningTo,
        },
        {
          dayOfWeek: 2,
          morningOpeningTime: this.saturdayMorningFrom,
          morningClosingTime: this.saturdayMorningTo,
          eveningOpeningTime: this.saturdayEveningFrom,
          eveningClosingTime: this.saturdayEveningTo,
        },
        {
          dayOfWeek: 3,
          morningOpeningTime: this.saturdayMorningFrom,
          morningClosingTime: this.saturdayMorningTo,
          eveningOpeningTime: this.saturdayEveningFrom,
          eveningClosingTime: this.saturdayEveningTo,
        },
        {
          dayOfWeek: 4,
          morningOpeningTime: this.saturdayMorningFrom,
          morningClosingTime: this.saturdayMorningTo,
          eveningOpeningTime: this.saturdayEveningFrom,
          eveningClosingTime: this.saturdayEveningTo,
        },
        {
          dayOfWeek: 5,
          morningOpeningTime: this.saturdayMorningFrom,
          morningClosingTime: this.saturdayMorningTo,
          eveningOpeningTime: this.saturdayEveningFrom,
          eveningClosingTime: this.saturdayEveningTo,
        },
        {
          dayOfWeek: 6,
          morningOpeningTime: this.saturdayMorningFrom,
          morningClosingTime: this.saturdayMorningTo,
          eveningOpeningTime: this.saturdayEveningFrom,
          eveningClosingTime: this.saturdayEveningTo,
        },
      ],
    };
    this.branchService.newBranch(body).subscribe({
      next: (v: any) => {
        this.alertService.success({ title: 'شعبه اضافه شد', msg: '' });
        this.form.reset();
      },
    });
  }
}
