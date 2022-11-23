import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

/**
 * MenuComponent
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChild('menu') menu!: ElementRef<any>;
  @ViewChild('mask') mask!: ElementRef<any>;
  @Input() items: MenuItem[] = [];

  /**
   * 點擊漢堡條
   */
  onIconClick() {
    this.mask.nativeElement.classList.add('active');
    this.menu.nativeElement.classList.add('active');
  }

  /**
   * 點擊遮罩
   */
  onMaskClick() {
    this.mask.nativeElement.classList.remove('active');
    this.menu.nativeElement.classList.remove('active');
  }
}
