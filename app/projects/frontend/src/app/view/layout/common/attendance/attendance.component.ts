import { Component, Input, OnInit } from '@angular/core';
import { employees } from '@libs/data/employee';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { Attendance } from '@libs/interface/punch-interface';
import { AttendanceDialogComponent } from '@frontend/view/layout/common/attendance/attendance-dialog/attendance-dialog.component';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
/**
 * 出勤紀錄/管理
 */
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  @Input() title: '出勤管理' | '出勤紀錄' = '出勤管理';

  attendances: Attendance[] = [];
  employeeOptions: CommonOption[] = [];

  /**
   * constructor
   *
   * @param {MessageService} messageService MessageService
   * @param {DialogService} dialogService DialogService
   */
  constructor(
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    // 員工清單
    employees.forEach((employee) => {
      if (employee && employee.id && employee.name) {
        this.employeeOptions.push({
          name: `${employee.id} - ${employee.name}(${employee.engName})`,
          code: employee.id,
        });
      }
    });
    this.attendances = this.buildDate();
  }

  /**
   * 組成打卡區間
   *
   * @returns {Attendance[]} array
   */
  buildDate(): Attendance[] {
    const array: Attendance[] = [];
    const endDate = new Date();
    const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
    let id = 0;
    while (startDate <= endDate) {
      array.push({
        id,
        date: new Date(endDate),
        reason: '',
      });
      endDate.setDate(endDate.getDate() - 1);
      id++;
    }
    return array;
  }

  /**
   * 出勤補登
   *
   * @param {any} attendance attendance
   */
  fixAttendance(attendance: Attendance) {
    console.log(attendance);
    const ref = this.dialogService.open(AttendanceDialogComponent, {
      header: '出勤補登作業',
      width: '500px',
      data: attendance,
    });
    ref.onClose.subscribe((a: Attendance) => {
      console.log(a);
      if (a) {
        this.attendances[a.id] = a;
        console.log(this.attendances);
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
