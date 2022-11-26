import { Component, OnInit } from '@angular/core';
import { UtilService } from '@libs/service/util.service';

/**
 * 今日出勤
 */
@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.scss'],
})
export class PunchComponent implements OnInit {
  // 系統日
  today: Date = new Date();
  isWeekend = false;

  // 上班打卡時間
  workTime: Date | undefined;

  // 下班打卡時間
  offWorkTime: Date | undefined;

  /**
   * @param {UtilService} util UtilService
   */
  constructor(public util: UtilService) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.isWeekend = this.util.isWeekend(this.today.getDay());
  }

  /**
   * 上班打卡
   */
  workPunch(): void {
    this.workTime = new Date();
  }

  /**
   * 下班打卡
   */
  offWorkPunch(): void {
    this.offWorkTime = new Date();
  }
}
