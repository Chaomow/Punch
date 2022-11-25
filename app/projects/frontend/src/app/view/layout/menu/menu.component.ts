import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouteService } from '@libs/service/route.service';
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
  items: MenuItem[] = [];
  role: 'admnin' | 'employee' = 'employee';

  /**
   * constructor
   *
   * @param {MessageService} messageService 訊息
   * @param {RouteService} routeService 路由
   */
  constructor(
    private messageService: MessageService,
    private routeService: RouteService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
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
        label: '參數設定',
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
          this.routeService.go('login');
          this.messageService.add({
            severity: 'success',
            summary: '登出',
            detail: '成功',
          });
        },
      },
    ];
    switch (this.role) {
      case 'admnin':
        this.items = [...adminMenu, ...commonMenu];
        break;
      case 'employee':
        this.items = [...employeeMenu, ...commonMenu];
        break;
    }
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
  showMenu() {
    this.mask.nativeElement.classList.add('active');
    this.menu.nativeElement.classList.add('active');
  }

  /**
   * 點擊遮罩
   */
  hideMenu() {
    this.mask.nativeElement.classList.remove('active');
    this.menu.nativeElement.classList.remove('active');
  }
}
