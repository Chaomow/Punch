import { Component } from '@angular/core';
import { employees } from '@libs/data/employee';
import { EmployeeDialogComponent } from '@frontend/view/layout/admin/employee/employee-dialog/employee-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Employee } from '@libs/interface/employee-interface';
import { NegativeConfirm } from '@libs/class/confirmation';

/**
 * 員工清單
 */
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  employees: Employee[] = employees;
  selectedEmployees: Employee[] = [];

  /**
   * constructor
   *
   * @param {MessageService} messageService MessageService
   * @param {ConfirmationService} confirmationService ConfirmationService
   * @param {DialogService} dialogService DialogService
   */
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService
  ) {}

  /**
   * 新增員工
   */
  openNew() {
    const ref = this.dialogService.open(EmployeeDialogComponent, {
      header: '新增員工',
      width: '500px',
    });
    ref.onClose.subscribe((employee: Employee) => {
      if (employee && employee.id) {
        this.employees.push(employee);
        this.employees = [...this.employees];
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `新增員工 ${employee.name}(${employee.engName})`,
          life: 3000,
        });
      }
    });
  }

  /**
   * 每日上下班時間
   *
   * @param {any} employee employee
   */
  openPunch(employee: Employee) {}

  /**
   * 編輯員工
   *
   * @param {any} employee employee
   */
  editEmployee(employee: Employee) {
    const ref = this.dialogService.open(EmployeeDialogComponent, {
      header: '員工資料',
      width: '500px',
      data: employee,
    });
    ref.onClose.subscribe((employee: Employee) => {
      if (employee && employee.id) {
        this.employees[this.findIndexById(employee.id)] = employee;
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `儲存員工 ${employee.name}(${employee.engName})`,
          life: 3000,
        });
      }
    });
  }

  /**
   * 刪除員工
   *
   * @param {any} employee employee
   */
  deleteEmployee(employee: Employee) {
    this.confirmationService.confirm({
      ...new NegativeConfirm(),
      message: `請問是否確定刪除 ${employee.name} (${employee.engName}) ？`,
      /**
       * accept
       */
      accept: () => {
        this.employees = this.employees.filter((val) => val.id !== employee.id);
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `刪除員工 ${employee.name}(${employee.engName})`,
          life: 3000,
        });
      },
    });
  }

  /**
   * findIndexById
   *
   * @param {string} id string
   * @returns {number} index
   */
  findIndexById(id: string): number {
    let index = -1;
    this.employees.forEach((e, i) => {
      if (this.employees[i].id === id) {
        index = i;
      }
    });
    return index;
  }
}
