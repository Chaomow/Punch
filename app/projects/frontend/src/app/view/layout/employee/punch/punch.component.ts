import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '@frontend/api/employee-api.service';
import { PunchType, PunchTypeKey } from '@libs/enum/punch-enum';
import { LoginInfo } from '@libs/interface/config-interface';
import { Attendance } from '@libs/interface/punch-interface';
import { UtilService } from '@libs/service/util.service';
import { MessageService } from 'primeng/api';

/**
 * 今日出勤
 */
@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.scss'],
})
export class PunchComponent implements OnInit {
  user?: LoginInfo;
  today: Date = new Date();
  isWeekend = false;
  // 上班打卡時間
  workTime?: Date;
  // 下班打卡時間
  offWorkTime?: Date;

  /**
   * @param {UtilService} util UtilService
   * @param {EmployeeApiService} api EmployeeApiService
   * @param {MessageService} messageService MessageService
   */
  constructor(
    public util: UtilService,
    private api: EmployeeApiService,
    private messageService: MessageService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.user = this.util.getUser();
    this.isWeekend = this.util.isWeekend(this.today.getDay());

    // 取得員工打卡紀錄
    this.api.getPunchRecords(this.user?.userId).then((data) => {
      const records = data?.filter((r: Attendance) => {
        return this.today.toDateString() == new Date(r.date).toDateString();
      });
      if (records && records.length > 0) {
        records.forEach((record) => {
          if (record.type === PunchTypeKey.WORK) {
            this.workTime = record.time;
          }
          if (record.type === PunchTypeKey.OFFWORK) {
            this.offWorkTime = record.time;
          }
        });
      }
    });
  }

  /**
   * 上班打卡
   */
  workPunch(): void {
    this.api.punchOnWork(this.user?.userId).then((res) => {
      if (res && res.status === true) {
        this.workTime = new Date();
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `打卡上班`,
        });
      }
    });
  }

  /**
   * 下班打卡
   */
  offWorkPunch(): void {
    this.api.punchOffWork(this.user?.userId).then((res) => {
      if (res && res.status === true) {
        this.offWorkTime = new Date();
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `打卡下班`,
        });
      }
    });
  }
}
