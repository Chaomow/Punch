import { Component, Input, OnInit } from '@angular/core';
import { employees } from '@libs/data/employee';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { Attendance } from '@libs/interface/punch-interface';
import { AttendanceDialogComponent } from '@frontend/view/layout/common/attendance/attendance-dialog/attendance-dialog.component';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PunchType } from '@libs/enum/punch-enum';
import { punchRecord } from '@libs/data/punch';
import { ActivatedRoute } from '@angular/router';

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
  attendances: Attendance[] = [];
  employeeOptions: CommonOption[] = [];
  monthPick = new Date();
  employeePick = '';
  employeeOption!: CommonOption;

  /**
   * constructor
   *
   * @param {MessageService} messageService MessageService
   * @param {DialogService} dialogService DialogService
   * @param {ActivatedRoute} route ActivatedRoute
   */
  constructor(
    private messageService: MessageService,
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('id')) {
        this.employeePick = params.get('id') as string;
      }
    });
    // 員工清單
    employees.forEach((employee) => {
      if (employee && employee.id && employee.name) {
        this.employeeOptions.push({
          name: `${employee.id}-${employee.name}(${employee.engName})`,
          code: employee.id,
        });
      }
    });
    // 預設當月
    this.changeMonth();
    // 員工選擇
    if (this.employeePick) {
      this.changeEmployee();
    }
  }

  /**
   * 選擇月份
   */
  changeMonth() {
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
  changeEmployee() {
    // Title
    this.employeeOption = this.employeeOptions.filter(
      (e) => e.code === this.employeePick
    )[0];
    this.title = `出勤紀錄：${this.employeeOption.name}`;
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
    // API
    const records = punchRecord.filter(
      (r) =>
        r.employeeId === this.employeePick && r.date >= start && r.date <= end
    );

    const array: Attendance[] = [];
    let id = 0;
    while (start <= end) {
      const record = records.filter(
        (r) => end.toDateString() == r.date.toDateString()
      )[0];
      const item = {
        date: new Date(end),
        employeeId: record?.employeeId,
        time: record?.time,
        create: record?.create,
        modify: record?.modify,
        reason: record?.reason,
      };
      // 上班
      array.push({
        ...item,
        id,
        type: 'Start',
      });
      id++;
      // 下班
      array.push({
        ...item,
        id,
        type: 'End',
      });
      id++;
      end.setDate(end.getDate() - 1);
    }
    return array;
  }

  /**
   * 出勤補登
   *
   * @param {any} attendance attendance
   */
  fixAttendance(attendance: Attendance) {
    const work = attendance.type === 'Start' ? PunchType.Start : PunchType.End;
    const ref = this.dialogService.open(AttendanceDialogComponent, {
      header: `${work}補登作業`,
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
          life: 3000,
        });
      }
    });
  }
}
