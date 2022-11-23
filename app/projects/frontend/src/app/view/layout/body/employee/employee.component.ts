import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

/**
 * 員工清單
 */
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  employee: any;
  employees: any[] = [];
  selectedEmployees: any[] = [];

  submitted?: boolean;
  employeeDialog?: boolean;

  searchValue = '';

  /**
   * constructor
   *
   * @param {MessageService} messageService MessageService
   * @param {ConfirmationService} confirmationService ConfirmationService
   */
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  /**
   * 新增員工
   */
  openNew() {
    this.employee = {};
    this.submitted = false;
    this.employeeDialog = true;
  }

  /**
   * 刪除選擇的員工
   */
  deleteSelectedEmployee() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      /**
       * accept
       */
      accept: () => {
        this.employees = this.employees.filter(
          (val) => !this.selectedEmployees.includes(val)
        );
        this.selectedEmployees = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  /**
   * 編輯員工
   *
   * @param {any} employee employee
   */
  editEmployee(employee: any) {
    this.employee = { ...employee };
    this.employeeDialog = true;
  }

  /**
   * 刪除員工
   *
   * @param {any} employee employee
   */
  deleteEmployee(employee: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + employee.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      /**
       * accept
       */
      accept: () => {
        this.employees = this.employees.filter((val) => val.id !== employee.id);
        this.employee = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }
}
