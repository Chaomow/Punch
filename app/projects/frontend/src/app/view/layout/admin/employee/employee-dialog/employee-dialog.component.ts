import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeApiService } from '@frontend/api/employee-api.service';
import { WorkingPeriod } from '@libs/enum/config-enum';
import { Department, Level } from '@libs/enum/employee-enum';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { Employee } from '@libs/interface/employee-interface';
import { DataService } from '@libs/service/data.service';
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
    // API
    this.deptList = this.data.Options({ object: Department });
    this.levelList = this.data.Options({ object: Level });
    this.groupList = this.data.Options({ object: WorkingPeriod });
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
      if (this.config && this.config.data) {
        this.api.saveEmployee(this.employeeForm.getRawValue()).then((res) => {
          this.close();
        });
      } else {
        this.api.newEmployee(this.employeeForm.getRawValue()).then((res) => {
          this.close();
        });
      }
    }
  }

  /**
   * 關閉視窗
   */
  close() {
    this.ref.close(this.employeeForm.getRawValue());
  }
}
