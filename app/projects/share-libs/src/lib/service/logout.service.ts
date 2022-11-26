import { Injectable } from '@angular/core';
import { RouteService } from '@libs/service/route.service';
import { UtilService } from '@libs/service/util.service';

/**
 * 登出
 */
@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  /**
   * @param {UtilService} util UtilService
   * @param {RouteService} route RouteService
   */
  constructor(private util: UtilService, private route: RouteService) {}

  /**
   * 登出
   */
  doLogout() {
    this.util.cleanUser();
    this.route.go('login');
  }
}
