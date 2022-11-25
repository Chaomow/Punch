import { Component } from '@angular/core';
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
export class LayoutComponent {
  title = environment.title;
  menuItems: MenuItem[] = [];
}
