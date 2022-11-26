import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { holidayOptions, roleOptions } from '@libs/data/config';
import { deptOptions, levelOptions } from '@libs/data/employee';
import { periodOptions, reasonOptions } from '@libs/data/punch';
import { CommonOption } from '@libs/interface/dropdown-interface';

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
  changeConfig(value?: string) {
    // API
    switch (value) {
      case 'period':
        this.consfigList = periodOptions();
        break;
      case 'department':
        this.consfigList = deptOptions();
        break;
      case 'level':
        this.consfigList = levelOptions();
        break;
      case 'reason':
        this.consfigList = reasonOptions();
        break;
      case 'holiday':
        this.consfigList = holidayOptions();
        break;
      case 'role':
      default:
        this.consfigList = roleOptions();
    }
  }

  /**
   * 儲存
   */
  submit() {
    // TODO
  }
}
