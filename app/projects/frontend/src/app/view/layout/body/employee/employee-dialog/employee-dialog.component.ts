import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { levelOptions, deptOptions } from '@libs/data/employee';
import { DropdownOption } from '@libs/interface/dropdown-interface';
import { Employee } from '@libs/interface/employee-interface';
import { MessageService } from 'primeng/api';
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
  employeeForm!: FormGroup;
  employee!: Employee;
  levelList!: DropdownOption[];
  deptList!: DropdownOption[];

  /**
   * constructor
   *
   * @param {DynamicDialogRef} ref DynamicDialogRef
   * @param {DynamicDialogConfig} config DynamicDialogConfig
   * @param {MessageService} messageService MessageService
   */
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.deptList = deptOptions();
    this.levelList = levelOptions();
    if (this.config) {
      this.employee = this.config.data as Employee;
      this.employeeForm = new FormGroup({
        id: new FormControl(
          { value: this.employee.id, disabled: true },
          Validators.required
        ),
        dept: new FormControl(this.employee.dept, Validators.required),
        name: new FormControl(this.employee.name, Validators.required),
        engName: new FormControl(this.employee.engName, Validators.required),
        level: new FormControl(this.employee.level, Validators.required),
      });
    }
  }

  /**
   * 儲存
   *
   * @param {any} formValue formValue
   */
  submit(formValue: any): void {
    this.employeeForm.markAllAsTouched();
    this.ref.close(this.employeeForm.getRawValue());
  }
}
