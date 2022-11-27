import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeApiService } from '@frontend/api/employee-api.service';
import { PunchReason } from '@libs/enum/punch-enum';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { Attendance } from '@libs/interface/punch-interface';
import { DataService } from '@libs/service/data.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

/**
 * 出勤補登調整
 */
@Component({
  selector: 'app-attendance-dialog',
  templateUrl: './attendance-dialog.component.html',
  styleUrls: ['./attendance-dialog.component.scss'],
})
export class AttendanceDialogComponent implements OnInit {
  attendanceForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  });
  attendance!: Attendance;
  reasonList!: CommonOption[];

  /**
   * @param {DynamicDialogRef} ref DynamicDialogRef
   * @param {DynamicDialogConfig} config DynamicDialogConfig
   * @param {DataService} data DataService
   * @param {EmployeeApiService} api EmployeeApiService
   */
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private data: DataService,
    private api: EmployeeApiService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.reasonList = this.data.Options({ object: PunchReason });
    if (this.config && this.config.data) {
      this.attendance = this.config.data as Attendance;
      if (this.attendance.date) {
        (this.attendanceForm.get('date') as FormControl).setValue(
          this.attendance.date
        );
        (this.attendanceForm.get('date') as FormControl).disable();
      }
      if (this.attendance.type) {
        (this.attendanceForm.get('type') as FormControl).setValue(
          this.attendance.type
        );
      }
      if (this.attendance.time) {
        (this.attendanceForm.get('time') as FormControl).setValue(
          new Date(this.attendance.time)
        );
      }
      if (this.attendance.reason) {
        (this.attendanceForm.get('reason') as FormControl).setValue(
          this.attendance.reason
        );
      }
    }
  }

  /**
   * 儲存
   */
  submit(): void {
    this.attendanceForm.markAllAsTouched();
    if (this.attendanceForm.valid) {
      const a = this.attendanceForm.getRawValue();
      const data: Attendance = {
        ...this.attendance,
        ...a,
        create: this.attendance.create || new Date(),
        modify: new Date(),
      };
      this.api.fixAttendance(data).then((res) => {
        this.ref.close(data);
      });
    }
  }
}
