import { formatDate } from '@angular/common';
import { Inject, Injectable, InjectionToken, LOCALE_ID } from '@angular/core';
import { LoginInfo } from '@libs/interface/config-interface';
import { AesService } from '@libs/service/aes.service';
import { RouteService } from '@libs/service/route.service';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  /**
   * localStorage
   *
   * @returns {Storage} localStorage
   */
  factory: (): Storage => localStorage,
});

/**
 * Util
 */
@Injectable({
  providedIn: 'root',
})
export class UtilService {
  /**
   * @param {Storage} storage Storage
   * @param {string} locale Storage
   * @param {AesService} aes AesService
   * @param {RouteService} route RouteService
   */
  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    @Inject(LOCALE_ID) private locale: string,
    private aes: AesService,
    private route: RouteService
  ) {}

  /**
   * 儲存storage
   *
   * @param {string} key KEY
   * @param {string} value 資料
   */
  private setLocalStorage(key: string, value: string): void {
    const encKey = this.toString(this.aes.aesEnc(key));
    const encValue = this.toString(this.aes.aesEnc(value));
    this.storage.setItem(encKey, encValue);
  }

  /**
   * 刪除storage
   *
   * @param {string} key KEY
   */
  private removeLocalStorage(key: string): void {
    this.storage.removeItem(this.aes.aesEnc(key));
  }

  /**
   * 取得localStorage
   *
   * @param {string} key KEY
   * @returns {string | null} 回傳 key 對應的資料
   */
  private getLocalStorage(key: string): string | null {
    return this.storage.getItem(this.aes.aesEnc(key));
  }

  /**
   * 取得使用者資訊
   *
   * @returns {LoginInfo | undefined} 使用者資訊
   */
  getUser(): LoginInfo | undefined {
    try {
      const user = this.getLocalStorage('USER');
      return user ? JSON.parse(this.aes.aesDec(user)) : null;
    } catch (error) {
      console.error(error);
      this.cleanUser();
      this.route.go('/login');
      return undefined;
    }
  }

  /**
   * 儲存使用者資訊
   *
   * @param {any} value 資訊
   */
  setUser(value: string | LoginInfo): void {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    this.setLocalStorage('USER', value);
  }

  /**
   * 清除使用者資訊
   */
  cleanUser(): void {
    this.removeLocalStorage('USER');
  }

  /**
   * 判斷周末
   *
   * @param {number} dayOfWeek 星期
   * @returns {boolean} 是否周末
   */
  isWeekend(dayOfWeek: number): boolean {
    return dayOfWeek === 6 || dayOfWeek === 0;
  }

  /**
   * 星期資訊
   *
   * @param {number} dayOfWeek 星期
   * @returns {string} 星期
   */
  getWeekend(dayOfWeek: number): string {
    switch (dayOfWeek) {
      case 1:
        return '一';
      case 2:
        return '二';
      case 3:
        return '三';
      case 4:
        return '四';
      case 5:
        return '五';
      case 6:
        return '六';
      case 0:
        return '日';
      default:
        return '';
    }
  }

  /**
   * 日期格式轉換
   *
   * @param {string | number | Date} value 日期
   * @param {string} format 日期格式
   * @returns {string} Date 日期
   */
  formatDate(value: string | number | Date, format?: string): string {
    return formatDate(new Date(value), format || 'yyyy/MM/dd', this.locale);
  }

  /**
   * 資料轉為字串
   *
   * @param {any} value 資料
   * @returns {string} 字串
   */
  toString(value: any): string {
    return value + '';
  }

  /**
   * 資料轉為數字
   *
   * @param {any} value 資料
   * @returns {number} 數字
   */
  toNumber(value: any): number {
    return +value;
  }
}
