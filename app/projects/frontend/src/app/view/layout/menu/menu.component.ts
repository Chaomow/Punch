import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AdminApiService } from '@frontend/api/admin-api.service';
import { LogoutService } from '@libs/service/logout.service';
import { MenuItem, MessageService } from 'primeng/api';

/**
 * MenuComponent
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menu!: ElementRef<any>;
  @ViewChild('mask') mask!: ElementRef<any>;
  @Input() isAdmin = false;
  items: MenuItem[] = [];

  /**
   * @param {MessageService} messageService MessageService
   * @param {LogoutService} logout LogoutService
   * @param {AdminApiService} api AdminApiService
   */
  constructor(
    private messageService: MessageService,
    private logout: LogoutService,
    private api: AdminApiService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    // 員工選單
    const employeeMenu: MenuItem[] = [
      {
        label: '今日出勤',
        icon: 'pi pi-clock',
        routerLink: 'employee/punch',
        command: this.command,
      },
      {
        label: '出勤紀錄',
        icon: 'pi pi-file',
        routerLink: 'employee/attendance',
        command: this.command,
      },
      {
        label: '請假申請',
        icon: 'pi pi-calendar-times',
        routerLink: 'employee/dayoff',
        command: this.command,
      },
    ];
    // 管理者選單
    const adminMenu: MenuItem[] = [
      {
        label: '員工管理',
        icon: 'pi pi-users',
        routerLink: 'admin/employee',
        command: this.command,
      },
      {
        label: '出勤管理',
        icon: 'pi pi-clock',
        routerLink: 'admin/attendance',
        command: this.command,
      },
      {
        label: '系統參數',
        icon: 'pi pi-cog',
        routerLink: 'admin/config',
        command: this.command,
      },
      // {
      //   label: '測試API成功',
      //   icon: 'pi pi-check-circle',
      //   /**
      //    * command
      //    */
      //   command: () => {
      //     this.hideMenu();
      //     this.api.testSuccess();
      //   },
      // },
      // {
      //   label: '測試API失敗',
      //   icon: 'pi pi-exclamation-triangle',
      //   /**
      //    * command
      //    */
      //   command: () => {
      //     this.hideMenu();
      //     this.api.testError();
      //   },
      // },
    ];
    // 共用選單
    const commonMenu: MenuItem[] = [
      {
        label: '登出',
        icon: 'pi pi-sign-out',
        /**
         * command
         */
        command: () => {
          this.hideMenu();
          this.logout.doLogout();
          this.messageService.add({
            severity: 'success',
            summary: '登出',
            detail: '成功',
          });
        },
      },
    ];
    this.items = this.isAdmin
      ? [...adminMenu, ...commonMenu]
      : [...employeeMenu, ...commonMenu];
  }

  /**
   * hideMenu
   */
  command = () => {
    this.hideMenu();
  };

  /**
   * 點擊漢堡條
   */
  showMenu(): void {
    this.mask.nativeElement.classList.add('active');
    this.menu.nativeElement.classList.add('active');
  }

  /**
   * 點擊遮罩
   */
  hideMenu(): void {
    this.mask.nativeElement.classList.remove('active');
    this.menu.nativeElement.classList.remove('active');
  }
}
