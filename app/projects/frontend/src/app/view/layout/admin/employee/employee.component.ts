import { Component, OnInit } from '@angular/core';
import { EmployeeDialogComponent } from '@frontend/view/layout/admin/employee/employee-dialog/employee-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Employee } from '@libs/interface/employee-interface';
import { NegativeConfirm } from '@libs/class/confirmation';
import { RouteService } from '@libs/service/route.service';
import { EmployeeApiService } from '@frontend/api/employee-api.service';

/**
 * 員工清單
 */
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployees: Employee[] = [];

  /**
   * @param {MessageService} messageService MessageService
   * @param {ConfirmationService} confirmationService ConfirmationService
   * @param {DialogService} dialogService DialogService
   * @param {RouteService} route RouteService
   * @param {EmployeeApiService} api EmployeeApiService
   */
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private route: RouteService,
    private api: EmployeeApiService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.api.getEmployees().then((data) => {
      this.employees = data;
    });
  }

  /**
   * 新增員工
   */
  openNew(): void {
    const ref = this.dialogService.open(EmployeeDialogComponent, {
      header: '新增員工',
      width: '500px',
    });
    ref.onClose.subscribe((employee: Employee) => {
      if (employee && employee.userId) {
        this.employees.unshift(employee);
        this.employees = [...this.employees];
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `新增員工 ${employee.name}(${employee.engName})`,
        });
      }
    });
  }

  /**
   * 每日上下班時間
   *
   * @param {any} employee employee
   */
  openPunch(employee: Employee) {
    this.route.go('admin/attendance', { id: employee.userId });
  }

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
    ref.onClose.subscribe((e: Employee) => {
      if (e && e.userId) {
        this.employees[this.findIndexById(e.userId)] = e;
        this.messageService.add({
          severity: 'success',
          summary: '成功',
          detail: `儲存員工 ${e.name}(${e.engName})`,
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
        this.api.deleteEmployee(employee.userId).then((res) => {
          this.employees = this.employees.filter(
            (val) => val.userId !== employee.userId
          );
          this.messageService.add({
            severity: 'success',
            summary: '成功',
            detail: `刪除員工 ${employee.name}(${employee.engName})`,
          });
        });
      },
    });
  }

  /**
   * findIndexById
   *
   * @param {string} userId string
   * @returns {number} index
   */
  findIndexById(userId: string): number {
    let index = -1;
    this.employees.forEach((e, i) => {
      if (this.employees[i].userId === userId) {
        index = i;
      }
    });
    return index;
  }
}
