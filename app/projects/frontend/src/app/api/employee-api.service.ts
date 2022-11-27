import { Injectable } from '@angular/core';
import { ApiManager } from '@libs/enum/api-manager';
import { Employee } from '@libs/interface/employee-interface';
import { Attendance } from '@libs/interface/punch-interface';
import { ApiService } from '@libs/service/api.service';
import { lastValueFrom, Observable, Observer } from 'rxjs';

/**
 * 員工API
 */
@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  /**
   * @param {ApiService} api ApiService
   */
  constructor(private api: ApiService) {}

  /**
   * 取得員工
   *
   * @returns {Employee[]} 員工清單
   */
  async getEmployees() {
    const res = await lastValueFrom(this.api.get(ApiManager.getEmployees));
    if (res && res.status === true && res.data) {
      return res.data.map((p: Employee) => p);
    }
    return null;
  }

  /**
   * 取得員工打卡紀錄
   *
   * @param {string} employeeId 員編
   * @returns {Attendance[]} 打卡紀錄
   */
  async getPunchRecords(employeeId: string) {
    const res = await lastValueFrom(this.api.get(ApiManager.getPunchRecords));
    if (res && res.status === true && res.data) {
      return res.data
        .map((a: Attendance) => a)
        .filter((r: Attendance) => r.employeeId === employeeId);
    }
    return null;
  }
}
