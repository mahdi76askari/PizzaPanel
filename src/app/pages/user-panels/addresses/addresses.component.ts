import { Component, inject, OnInit } from '@angular/core';

import { TitleComponent } from '../../../components/elements/forms/title/title.component';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { NewAddressComponent } from './blocks/new-address/new-address.component';
import { AddressService } from '../../../services/http/address.service';
import { AlertService } from '../../../services/tools/alert.service';
import { AccountService } from '../../../services/http/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [TitleComponent, ButtonComponent, CommonModule],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss',
})
export class AddressesComponent implements OnInit {
  dialog = inject(MatDialog);

  addresses: any = [];
  selectedAddress: number = 0;

  constructor(
    private addressService: AddressService,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this.addressService.getAddress().subscribe({
      next: (v: any) => {
        this.addresses = v.data.addresses;
        this.selectedAddress = v.data.selectedAddress;
      },
    });
  }
  openNew() {
    this.dialog
      .open(NewAddressComponent, {
        data: {},
      })
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getAddress();
        },
      });
  }

  assign(id: any) {
    this.accountService.assignAddress({ addressId: id }).subscribe({
      next: (v: any) => {
        this.alertService.success({
          title: 'تغییر آدرس',
          msg: 'آدرس پیشفرض به روز شد',
        });
        this.getAddress();
      },
    });
  }
}
