import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

/**
 * Util
 */
@Injectable({
  providedIn: 'root',
})
export class UtilService {
  /**
   * @param {string} locale LOCALE_ID
   */
  constructor(@Inject(LOCALE_ID) private locale: string) {}

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
   * angular 日期格式轉換
   *
   * @param {string | number | Date} value 日期
   * @param {string} format 日期格式
   * @returns {string} Date 日期
   */
  ngFormatDate(value: string | number | Date, format?: string): string {
    return formatDate(new Date(value), format || 'yyyy/MM/dd', this.locale);
  }
}
