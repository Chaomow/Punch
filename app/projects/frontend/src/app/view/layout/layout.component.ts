import { Component } from '@angular/core';
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
export class LayoutComponent {
  title = environment.title;
  menuItems: MenuItem[] = [];
}
