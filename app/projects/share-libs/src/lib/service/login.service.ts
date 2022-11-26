import { Injectable } from '@angular/core';
import { RoleKey, RoleUrl } from '@libs/enum/config-enum';
import { LoginInfo } from '@libs/interface/config-interface';
import { RouteService } from '@libs/service/route.service';
import { UtilService } from '@libs/service/util.service';

/**
 * 登入
 */
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  /**
   * @param {UtilService} util UtilService
   * @param {RouteService} route RouteService
   */
  constructor(private util: UtilService, private route: RouteService) {}

  /**
   * 登入成功後設定/暫存使用者資訊
   *
   * @param {LoginInfo} data 登入資訊
   */
  setLoginInfo(data: LoginInfo): void {
    const now = new Date();
    const user: LoginInfo = {
      userId: data.userId,
      name: data.name,
      role: data.userId === RoleKey.ADMIN ? RoleKey.ADMIN : RoleKey.EMPLOYEE,
      loginTime: now,
    };
    this.util.setUser(user);
    if (user.role === RoleKey.ADMIN) {
      this.route.go(RoleUrl.ADMIN);
    }
    if (user.role === RoleKey.EMPLOYEE) {
      this.route.go(RoleUrl.EMPLOYEE);
    }
  }
}
