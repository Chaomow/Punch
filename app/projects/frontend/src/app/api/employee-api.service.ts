import { Injectable } from '@angular/core';
import { ApiManager } from '@libs/enum/api-manager';
import { Employee } from '@libs/interface/employee-interface';
import { Attendance } from '@libs/interface/punch-interface';
import { ApiService } from '@libs/service/api.service';
import { lastValueFrom } from 'rxjs';

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
   * 新增員工
   *
   * @param {Employee} data 員工資料
   * @returns {any} res
   */
  async newEmployee(data: Employee): Promise<any> {
    if (data) {
      return await lastValueFrom(this.api.post(ApiManager.newEmployee, data));
    }
    return null;
  }

  /**
   * 修改員工
   *
   * @param {Employee} data 員工資料
   * @returns {any} res
   */
  async saveEmployee(data: Employee): Promise<any> {
    if (data) {
      return await lastValueFrom(this.api.post(ApiManager.saveEmployee, data));
    }
    return null;
  }

  /**
   * 刪除員工
   *
   * @param {string} employeeId 員編
   * @returns {any} res
   */
  async deleteEmployee(employeeId: string | undefined): Promise<any> {
    if (employeeId) {
      return await lastValueFrom(
        this.api.post(ApiManager.deleteEmployee, { employeeId })
      );
    }
    return null;
  }

  /**
   * 取得員工打卡紀錄
   *
   * @param {string} employeeId 員編
   * @returns {Attendance[]} 打卡紀錄
   */
  async getPunchRecords(
    employeeId: string | undefined
  ): Promise<Attendance[] | null> {
    if (employeeId) {
      const res = await lastValueFrom(this.api.get(ApiManager.getPunchRecords));
      if (res && res.status === true && res.data) {
        return res.data
          .map((a: Attendance) => a)
          .filter((r: Attendance) => r.employeeId === employeeId);
      }
    }
    return null;
  }

  /**
   * 打卡上班
   *
   * @param {string} employeeId 員編
   * @returns {any} res
   */
  async punchOnWork(employeeId: string | undefined): Promise<any> {
    if (employeeId) {
      return await lastValueFrom(
        this.api.post(ApiManager.punchOnWork, { employeeId })
      );
    }
    return null;
  }

  /**
   * 打卡下班
   *
   * @param {string} employeeId 員編
   * @returns {any} res
   */
  async punchOffWork(employeeId: string | undefined): Promise<any> {
    if (employeeId) {
      return await lastValueFrom(
        this.api.post(ApiManager.punchOffWork, { employeeId })
      );
    }
    return null;
  }
}
