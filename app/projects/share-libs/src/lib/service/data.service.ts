import { Injectable } from '@angular/core';
import { ApiManager } from '@libs/enum/api-manager';
import { Role, WorkingPeriod } from '@libs/enum/config-enum';
import { Department, Level } from '@libs/enum/employee-enum';
import { PunchReason } from '@libs/enum/punch-enum';
import { Holiday } from '@libs/interface/config-interface';
import { CommonOption } from '@libs/interface/dropdown-interface';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './api.service';

/**
 * 資料處理
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  /**
   * @param {ApiService} api ApiService
   */
  constructor(private api: ApiService) {}

  /**
   * Enum to options
   *
   * @param {Role | PunchReason | Level | Department | WorkingPeriod|  any} object 物件
   * @returns {*} 選單
   */
  Options({
    object,
  }: {
    object: Role | PunchReason | Level | Department | WorkingPeriod | any;
  }): CommonOption[] {
    const list: CommonOption[] = [];
    for (const key in object) {
      list.push({
        value: key,
        label: object[key as keyof typeof object],
      });
    }
    return list;
  }

  /**
   * 國定假日選單
   *
   * @returns {*} 國定假日選單
   */
  async holidayOptions(): Promise<CommonOption[] | null> {
    const res = await lastValueFrom(this.api.get(ApiManager.getHolidays));
    if (res && res.status === true && res.data) {
      return res.data.flatMap((h: Holiday) =>
        h.dates.map((d) => {
          const temp = new Date(d);
          const date = {
            year: temp.getFullYear(),
            month: ('0' + (temp.getMonth() + 1)).slice(-2),
            date: ('0' + temp.getDate()).slice(-2),
          };
          return {
            value: h.title,
            label: `${date.year}/${date.month}/${date.date}`,
          };
        })
      );
    }
    return null;
  }
}
