import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role, WorkingPeriod } from '@libs/enum/config-enum';
import { Department, Level } from '@libs/enum/employee-enum';
import { PunchReason } from '@libs/enum/punch-enum';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { DataService } from '@libs/service/data.service';

/**
 * 參數設定
 */
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  configForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  // 功能選項
  configOptions: CommonOption[] = [
    {
      value: 'role',
      label: '系統角色',
    },
    {
      value: 'reason',
      label: '補登原因',
    },
    {
      value: 'department',
      label: '部門',
    },
    {
      value: 'level',
      label: '職稱',
    },
    {
      value: 'period',
      label: '工作時段',
    },
    {
      value: 'holiday',
      label: '國定假日',
    },
  ];
  consfigList!: CommonOption[];

  /**
   * @param {DataService} data DataService
   */
  constructor(private data: DataService) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.changeConfig();
  }

  /**
   * 變更設定
   *
   * @Params {string} value value
   * @param {string} value value
   */
  async changeConfig(value?: string) {
    switch (value) {
      case 'period':
        this.consfigList = this.data.Options({ object: WorkingPeriod });
        break;
      case 'department':
        this.consfigList = this.data.Options({ object: Department });
        break;
      case 'level':
        this.consfigList = this.data.Options({ object: Level });
        break;
      case 'reason':
        this.consfigList = this.data.Options({ object: PunchReason });
        break;
      case 'holiday':
        this.data.holidayOptions().then((data) => {
          if (data) {
            this.consfigList = data;
          }
        });
        break;
      case 'role':
      default:
        this.consfigList = this.data.Options({ object: Role });
    }
  }

  /**
   * 儲存
   */
  submit(): void {
    // TODO
  }
}
