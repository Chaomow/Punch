import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RoleKey } from '@libs/enum/config-enum';
import { LogoutService } from '@libs/service/logout.service';
import { UtilService } from '@libs/service/util.service';
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
   * @param {UtilService} util UtilService
   * @param {LogoutService} logout LogoutService
   */
  constructor(
    private messageService: MessageService,
    private util: UtilService,
    private logout: LogoutService
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
    ];
    // 管理員選單
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
