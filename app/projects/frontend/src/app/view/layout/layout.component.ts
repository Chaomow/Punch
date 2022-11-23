import { Component, OnInit } from '@angular/core';
import { environment } from '@environment';
import { MenuItem } from 'primeng/api';

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
   * ngOnInit
   */
  ngOnInit() {
    this.menuItems = [
      {
        label: '員工清單',
        icon: 'pi pi-users',
      },
      {
        label: '登出',
        icon: 'pi pi-sign-out',
      },
    ];
  }
}
