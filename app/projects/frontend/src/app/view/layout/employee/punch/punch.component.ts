import { Component } from '@angular/core';
import { UtilService } from '@libs/service/util.service';

/**
 * 今日出勤
 */
@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.scss'],
})
export class PunchComponent {
  // 系統日
  today: Date = new Date();
  weekend!: string;

  // 上班打卡時間
  workTime: Date | undefined;
  workTimeDisabled = false;

  // 下班打卡時間
  offWorkTime: Date | undefined;
  offWorkTimeDisabled = false;

  /**
   * constructor
   *
   * @param {UtilService} util UtilService
   */
  constructor(public util: UtilService) {}

  /**
   * 上班打卡
   */
  workPunch() {
    this.workTime = new Date();
  }

  /**
   * 下班打卡
   */
  offWorkPunch() {
    this.offWorkTime = new Date();
  }
}
