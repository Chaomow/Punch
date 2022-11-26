import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { levelOptions, deptOptions } from '@libs/data/employee';
import { periodOptions } from '@libs/data/punch';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { Employee } from '@libs/interface/employee-interface';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

/**
 * 員工編輯框
 */
@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss'],
})
export class EmployeeDialogComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    userId: new FormControl('', Validators.required),
    dept: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    engName: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
  });
  employee!: Employee;
  levelList!: CommonOption[];
  deptList!: CommonOption[];
  groupList!: CommonOption[];

  /**
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
    this.deptList = deptOptions();
    this.levelList = levelOptions();
    this.groupList = periodOptions();
    if (this.config && this.config.data) {
      this.employee = this.config.data as Employee;
      (this.employeeForm.get('userId') as FormControl).setValue(
        this.employee.userId
      );
      (this.employeeForm.get('userId') as FormControl).disable();
      (this.employeeForm.get('dept') as FormControl).setValue(
        this.employee.dept
      );
      (this.employeeForm.get('name') as FormControl).setValue(
        this.employee.name
      );
      (this.employeeForm.get('engName') as FormControl).setValue(
        this.employee.engName
      );
      (this.employeeForm.get('level') as FormControl).setValue(
        this.employee.level
      );
      (this.employeeForm.get('group') as FormControl).setValue(
        this.employee.group
      );
    }
  }

  /**
   * 儲存
   */
  submit(): void {
    this.employeeForm.markAllAsTouched();
    if (this.employeeForm.valid) {
      this.ref.close(this.employeeForm.getRawValue());
    }
  }
}
