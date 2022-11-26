import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * 路由
 */
@Injectable({
  providedIn: 'root',
})
export class RouteService {
  /**
   * @param {Router} router Router
   */
  constructor(private router: Router) {}

  /**
   * 移至
   *
   * @param {string} url 路徑
   * @param {any} param 參數
   */
  go(url: string, param?: any) {
    if (param) {
      this.router.navigate([url], {
        queryParams: param,
      });
    } else {
      this.router.navigate([url]);
    }
  }
}
