import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeApiService } from '@frontend/api/employee-api.service';
import { LoginInfo } from '@libs/interface/config-interface';
import { Dayoff } from '@libs/interface/dayoff-interface';
import { UtilService } from '@libs/service/util.service';
import { MessageService } from 'primeng/api';

/**
 * 請假申請
 */
@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrls: ['./dayoff.component.scss'],
})
export class DayoffComponent implements OnInit {
  user?: LoginInfo;
  dayoffForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
  });

  /**
   * @param {UtilService} util UtilService
   * @param {MessageService} messageService MessageService
   * @param {EmployeeApiService} api EmployeeApiService
   */
  constructor(
    private util: UtilService,
    private messageService: MessageService,
    private api: EmployeeApiService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.user = this.util.getUser();
  }

  /**
   * 請假
   */
  submit(): void {
    this.dayoffForm.markAllAsTouched();
    if (this.dayoffForm.valid) {
      const a = this.dayoffForm.getRawValue();
      const applyDate = new Date(a.date);
      //取得當月員工休假紀錄
      this.api
        .getDayOff(this.user?.userId, applyDate.getMonth())
        .then((dayOffData) => {
          if (dayOffData) {
            if (dayOffData.length >= 3) {
              this.showError('當月請假已經達到3日');
            } else {
              const already = dayOffData.filter(
                (d) =>
                  new Date(d.date).toDateString() ==
                  new Date(applyDate).toDateString()
              );
              if (already.length > 0) {
                this.showError('當天已經請假');
              } else {
                const data: Dayoff = {
                  employeeId: this.user?.userId,
                  date: applyDate,
                  create: new Date(),
                };
                this.api.applyDayOff(data).then((res) => {
                  if (res && res.status === true) {
                    this.messageService.add({
                      severity: 'success',
                      summary: '成功',
                      detail: '申請完成',
                    });
                  }
                });
              }
            }
          }
        });
    }
  }

  /**
   * 顯示錯誤訊息
   *
   * @private
   * @param {string} msg 訊息
   * @memberof DayoffComponent
   */
  private showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: '申請失敗',
      detail: msg,
    });
  }
}
