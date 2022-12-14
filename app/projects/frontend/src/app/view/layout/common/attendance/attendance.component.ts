import { Component, Input, OnInit } from '@angular/core';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { Attendance } from '@libs/interface/punch-interface';
import { PunchType, PunchTypeKey } from '@libs/enum/punch-enum';
import { ActivatedRoute } from '@angular/router';
import { AttendanceDialogComponent } from '@frontend/view/layout/common/attendance/attendance-dialog/attendance-dialog.component';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { UtilService } from '@libs/service/util.service';
import { RoleKey } from '@libs/enum/config-enum';
import { EmployeeApiService } from '@frontend/api/employee-api.service';
import { Dayoff } from '@libs/interface/dayoff-interface';

/**
 * 出勤紀錄/管理
 */
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  @Input() title = '出勤管理';
  today = new Date();
  isAdmin = false;
  attendances: Attendance[] = [];
  employeeOptions: CommonOption[] = [];
  monthPick = this.today;
  employeePick = '';
  employeeOption!: CommonOption;

  /**
   * @param {MessageService} messageService MessageService
   * @param {DialogService} dialogService DialogService
   * @param {ActivatedRoute} route ActivatedRoute
   * @param {UtilService} util UtilService
   * @param {EmployeeApiService} api EmployeeApiService
   */
  constructor(
    private messageService: MessageService,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    public util: UtilService,
    private api: EmployeeApiService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    const user = this.util.getUser();
    this.isAdmin = user?.role === RoleKey.ADMIN;
    if (this.isAdmin) {
      // 為管理者才做網址上id判斷
      this.route.queryParamMap.subscribe((params) => {
        if (params.get('id')) {
          this.employeePick = params.get('id') as string;
        }
      });
    } else {
      this.employeePick = user?.userId as string;
    }

    this.api.getEmployees().then((data) => {
      data.forEach((employee: any) => {
        if (employee && employee.userId && employee.name) {
          this.employeeOptions.push({
            value: employee.userId,
            label: `${employee.userId}-${employee.name}(${employee.engName})`,
          });
        }
      });
      if (this.employeePick) {
        // 員工選擇
        this.changeEmployee();
      } else {
        // 預設當月
        this.changeMonth();
      }
    });
  }

  /**
   * 選擇月份
   */
  changeMonth(): void {
    const startDate = new Date(
      this.monthPick.getFullYear(),
      this.monthPick.getMonth(),
      1
    );
    const endDate = new Date(
      this.monthPick.getFullYear(),
      this.monthPick.getMonth() + 1,
      0
    );
    this.attendances = this.buildData(startDate, endDate);
  }

  /**
   * 選擇員工
   */
  changeEmployee(): void {
    // Title
    this.employeeOption = this.employeeOptions.filter(
      (e) => e.value === this.employeePick
    )[0];
    this.title = `出勤紀錄：${this.employeeOption.label}`;
    this.changeMonth();
  }

  /**
   * 組成打卡區間
   *
   * @param {Date} start 起始日
   * @param {Date} end 結束日
   * @returns {Attendance[]} array
   */
  buildData(start: Date, end: Date): Attendance[] {
    const array: Attendance[] = [];
    // 取得員工打卡紀錄
    this.api.getPunchRecords(this.employeePick).then((recordData) => {
      //取得員工休假紀錄
      this.api
        .getDayOff(this.employeePick, end.getMonth())
        .then((dayOffData) => {
          let id = 0;
          while (start <= end) {
            if (this.checkDate(end)) {
              end.setDate(end.getDate() - 1);
              continue;
            }
            // 當天打卡紀錄
            const records = recordData?.filter(
              (r: Attendance) =>
                end.toDateString() == new Date(r.date).toDateString()
            );
            // 當天請假紀錄
            const dayOff = dayOffData?.filter(
              (r: Dayoff) =>
                end.toDateString() == new Date(r.date).toDateString()
            );
            // 上班
            const workItem = records?.filter(
              (r) => r.type === PunchTypeKey.WORK
            )[0];
            array.push({
              ...workItem,
              date: new Date(end),
              id,
              type:
                dayOff && dayOff[0] ? PunchTypeKey.DAYOFF : PunchTypeKey.WORK,
            });
            id++;
            // 下班
            const offWorkItem = records?.filter(
              (r) => r.type === PunchTypeKey.OFFWORK
            )[0];
            array.push({
              ...offWorkItem,
              date: new Date(end),
              id,
              type:
                dayOff && dayOff[0]
                  ? PunchTypeKey.DAYOFF
                  : PunchTypeKey.OFFWORK,
            });
            id++;
            end.setDate(end.getDate() - 1);
          }
        });
    });
    return array;
  }

  /**
   * 出勤補登
   *
   * @param {any} attendance attendance
   */
  fixAttendance(attendance: Attendance) {
    const work =
      attendance.type === PunchTypeKey.WORK
        ? PunchType.work
        : PunchType.offwork;
    const ref = this.dialogService.open(AttendanceDialogComponent, {
      header: `${this.util.formatDate(attendance.date)} ${work}補登作業`,
      width: '500px',
      data: attendance,
    });
    ref.onClose.subscribe((a: Attendance) => {
      if (a) {
        this.attendances[a.id] = a;
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `補登完成`,
        });
      }
    });
  }

  /**
   * 確認日期
   *
   * @param {Date} date 打卡日
   * @returns {boolean} 是否超過今日
   */
  checkDate(date: Date): boolean {
    return date > this.today;
  }
}
