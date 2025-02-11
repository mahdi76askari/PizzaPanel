import { Component, OnInit } from '@angular/core';
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
export class AddBranchComponent implements OnInit {
  saturdayMorningFrom = '09:00';
  saturdayMorningTo = '12:00';

  form = new FormGroup({
    caption: new FormControl(),
    addressDetail: new FormControl(),
    plaque: new FormControl(),
    unit: new FormControl(),
    mangerUserId: new FormControl(),
  });

  users: any;
  constructor(private AdminService: AdminService) {}

  ngOnInit() {
    this.getBranchManagers();
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
}
