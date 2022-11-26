import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { reasonOptions } from '@libs/data/punch';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { Attendance } from '@libs/interface/punch-interface';
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
   * constructor
   *
   * @param {DynamicDialogRef} ref DynamicDialogRef
   * @param {DynamicDialogConfig} config DynamicDialogConfig
   */
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    // API
    this.reasonList = reasonOptions();
    if (this.config && this.config.data) {
      this.attendance = this.config.data as Attendance;
      (this.attendanceForm.get('date') as FormControl).setValue(
        this.attendance.date
      );
      (this.attendanceForm.get('date') as FormControl).disable();
      (this.attendanceForm.get('type') as FormControl).setValue(
        this.attendance.type
      );
      (this.attendanceForm.get('time') as FormControl).setValue(
        this.attendance.time
      );
      (this.attendanceForm.get('reason') as FormControl).setValue(
        this.attendance.reason
      );
    }
  }

  /**
   * 儲存
   */
  submit(): void {
    this.attendanceForm.markAllAsTouched();
    if (this.attendanceForm.valid) {
      const a = this.attendanceForm.getRawValue();
      const data = {
        ...this.attendance,
        ...a,
        create: this.attendance.create || new Date(),
        modify: new Date(),
      };
      this.ref.close(data);
    }
  }
}
