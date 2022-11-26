import { Component, OnInit } from '@angular/core';
import { environment } from '@environment';
import { RoleKey } from '@libs/enum/config-enum';
import { UtilService } from '@libs/service/util.service';

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
  isAdmin = false;
  username = '';

  /**
   * @param {UtilService} util UtilService
   */
  constructor(private util: UtilService) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    const user = this.util.getUser();
    this.username = user?.name as string;
    this.isAdmin = user?.role === RoleKey.ADMIN;
  }
}
