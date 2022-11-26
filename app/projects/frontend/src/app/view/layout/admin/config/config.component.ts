import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { periodOptions, reasonOptions } from '@libs/data/config';
import { deptOptions, levelOptions } from '@libs/data/employee';
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
      name: '補登原因',
      code: 'reason',
    },
    {
      name: '部門',
      code: 'department',
    },
    {
      name: '職稱',
      code: 'level',
    },
    {
      name: '工作時段',
      code: 'period',
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
      default:
        this.consfigList = reasonOptions();
    }
  }

  /**
   * 儲存
   */
  submit() {}
}
