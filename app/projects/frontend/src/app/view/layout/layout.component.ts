import { Component, OnInit } from '@angular/core';
import { environment } from '@environment';
import { RouteService } from '@libs/service/route.service';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

/**
 * LayoutComponent
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  title = environment.title;
  menuItems: MenuItem[] = [];

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
    this.menuItems = [
      {
        label: '員工管理',
        icon: 'pi pi-users',
        routerLink: 'employee',
      },
      {
        label: '登出',
        icon: 'pi pi-sign-out',
        /**
         * command
         */
        command: () => {
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
}
