import { Component } from '@angular/core';
import { SettingService } from '../../services/http/setting.service';
import { AlertService } from '../../services/tools/alert.service';
import { ButtonComponent } from '../../components/elements/button/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  data: any;
  constructor(
    private settingService: SettingService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getSetting();
  }

  getSetting() {
    const param = '';
    this.settingService.getSetting(param).subscribe({
      next: (v: any) => {
        this.data = v.data;
      },
    });
  }

  update(item: any) {
    console.log(item);
    const body = item.value;
    const param = `?code=${item.code}`;
    this.settingService.updateSetting(param, body).subscribe({
      next: (v: any) => {
        this.alertService.success({
          title: 'به روز رسانی ',
          msg: 'به روز رسانی تنظیمات انجام شد',
        });
      },
    });
  }
}
