/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-description */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { RoleKey, RoleUrl } from '@libs/enum/config-enum';
import { LoginInfo } from '@libs/interface/config-interface';
import { RouteService } from '@libs/service/route.service';
import { UtilService } from '@libs/service/util.service';
import { Observable } from 'rxjs';
/**
 * 判斷是否已經登入，如已經登入導向功能頁
 */
@Injectable({
  providedIn: 'root',
})
export class CheckLoginStatusGuard implements CanActivate {
  /**
   * @param {RouteService} route RouteService
   * @param {UtilService} util UtilService
   */
  constructor(private route: RouteService, private util: UtilService) {}

  /**
   * @param {ActivatedRouteSnapshot} route ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state RouterStateSnapshot
   */
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
    | any
  > {
    // user 資訊
    const user: LoginInfo | undefined = this.util.getUser();
    if (user) {
      if (user.loginTime) {
        // 系統時間
        const now = new Date();
        // 系統時間減15分鐘
        now.setMinutes(now.getMinutes() - 15);
        // 系統時間減15分鐘 是否大於 登入時間(是否還在登入的15分鐘內)
        if (now.getTime() > new Date(user.loginTime).getTime()) {
          this.util.cleanUser();
          return true;
        } else {
          if (user.role === RoleKey.ADMIN) {
            this.route.go(RoleUrl.ADMIN);
          }
          if (user.role === RoleKey.EMPLOYEE) {
            this.route.go(RoleUrl.EMPLOYEE);
          }
        }
      }
    } else {
      return true;
    }
  }
}
