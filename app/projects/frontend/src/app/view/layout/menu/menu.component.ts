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

  /**
   * constructor
   *
   * @param {MessageService} messageService 訊息
   * @param {RouteServiceService} routeService 路由
   */
  constructor(
    private messageService: MessageService,
    private routeService: RouteService
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.items = [
      {
        label: '員工管理',
        icon: 'pi pi-users',
        routerLink: 'employee',
        /**
         * command
         */
        command: () => {
          this.hideMenu();
        },
      },
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
  }

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
