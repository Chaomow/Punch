import { Injectable } from '@angular/core';
import { ApiManager } from '@libs/enum/api-manager';
import { Dayoff } from '@libs/interface/dayoff-interface';
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
      // return await lastValueFrom(this.api.post(ApiManager.newEmployee, data));
      console.log({
        api: 'newEmployee',
        url: ApiManager.newEmployee,
        data,
      });
      return await lastValueFrom(this.api.get(ApiManager.newEmployee));
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
      // return await lastValueFrom(this.api.post(ApiManager.saveEmployee, data));
      console.log({
        api: 'saveEmployee',
        url: ApiManager.saveEmployee,
        data,
      });
      return await lastValueFrom(this.api.get(ApiManager.saveEmployee));
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
      // return await lastValueFrom(
      //   this.api.post(ApiManager.deleteEmployee, { employeeId })
      // );
      console.log({
        api: 'deleteEmployee',
        url: ApiManager.deleteEmployee,
        data: { employeeId },
      });
      return await lastValueFrom(this.api.get(ApiManager.deleteEmployee));
    }
    return null;
  }

  /**
   * 取得員工請假紀錄
   *
   * @param {string} employeeId 員編
   * @param {number} month 月份
   * @returns {Dayoff[]} 請假紀錄
   */
  async getDayOff(
    employeeId: string | undefined,
    month: number
  ): Promise<Dayoff[] | null> {
    if (employeeId) {
      const res = await lastValueFrom(this.api.get(ApiManager.getDayOff));
      if (res && res.status === true && res.data) {
        return res.data.filter(
          (r: Dayoff) =>
            r.employeeId === employeeId && new Date(r.date).getMonth() === month
        );
      }
    }
    return null;
  }

  /**
   * 員工請假
   *
   * @param  {Dayoff} data 請假資料
   * @returns {any} res
   */
  async applyDayOff(data: Dayoff): Promise<any> {
    if (data) {
      // return await lastValueFrom(
      //   this.api.post(ApiManager.applyDayOff, data)
      // );
      console.log({
        api: 'applyDayOff',
        url: ApiManager.applyDayOff,
        data,
      });
      return await lastValueFrom(this.api.get(ApiManager.applyDayOff));
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
        return res.data.filter((r: Attendance) => r.employeeId === employeeId);
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
      // return await lastValueFrom(
      //   this.api.post(ApiManager.punchOnWork, { employeeId })
      // );
      console.log({
        api: 'punchOnWork',
        url: ApiManager.punchOnWork,
        data: { employeeId },
      });
      return await lastValueFrom(this.api.get(ApiManager.punchOnWork));
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
      // return await lastValueFrom(
      //   this.api.post(ApiManager.punchOffWork, { employeeId })
      // );
      console.log({
        api: 'punchOffWork',
        url: ApiManager.punchOffWork,
        data: { employeeId },
      });
      return await lastValueFrom(this.api.get(ApiManager.punchOffWork));
    }
    return null;
  }

  /**
   * 出勤補登
   *
   * @param {Attendance} data 出勤資料
   * @returns {any} res
   */
  async fixAttendance(data: Attendance): Promise<any> {
    if (data) {
      // return await lastValueFrom(
      //   this.api.post(ApiManager.fixAttendance, data)
      // );
      console.log({
        api: 'fixAttendance',
        url: ApiManager.fixAttendance,
        data,
      });
      return await lastValueFrom(this.api.get(ApiManager.fixAttendance));
    }
    return null;
  }
}
