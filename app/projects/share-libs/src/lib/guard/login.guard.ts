/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-description */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
  CanActivateChild,
} from '@angular/router';
import { RouteService } from '@libs/service/route.service';
import { UtilService } from '@libs/service/util.service';
import { Observable } from 'rxjs';

/**
 * 判斷是否有登入資訊
 * 如有登入資訊，取得當下日期
 * 如沒有導向登入
 */
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanLoad, CanActivateChild {
  /**
   * @param {RouteService} route RouteService
   * @param {UtilService} util UtilService
   */
  constructor(private route: RouteService, private util: UtilService) {}

  /**
   * canActivate
   *
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
    return this.reset();
  }

  /**
   * canLoad
   *
   * @param {Route} route Route
   * @param {UrlSegment} segments UrlSegment[]
   */
  async canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Promise<
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
    | any
  > {
    return this.reset();
  }

  /**
   * canActivateChild
   *
   * @param {ActivatedRouteSnapshot} childRoute ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state RouterStateSnapshot
   */
  async canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
    | any
  > {
    return this.reset();
  }

  /**
   * 更新使用者資訊
   *
   * @returns {boolean} boolean
   */
  reset(): boolean {
    // user 資訊
    const user = this.util.getUser();
    if (user) {
      const now = new Date();
      // 刷新登入時間
      user.loginTime = now;
      this.util.setUser(user);
      return true;
    } else {
      this.route.go('/login');
      return false;
    }
  }
}
