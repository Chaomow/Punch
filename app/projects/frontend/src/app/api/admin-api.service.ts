import { Injectable } from '@angular/core';
import { ApiManager } from '@libs/enum/api-manager';
import { Account } from '@libs/interface/config-interface';
import { ApiService } from '@libs/service/api.service';
import { MessageService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';

/**
 * 管理者API
 */
@Injectable({
  providedIn: 'root',
})
export class AdminApiService {
  /**
   * @param {ApiService} api ApiService
   * @param {MessageService} messageService MessageService
   */
  constructor(
    private api: ApiService,
    private messageService: MessageService
  ) {}

  /**
   * 取得管理者
   *
   * @param {string} userId 帳號
   * @param {string} password 密碼
   * @returns {Account[]} 員工清單
   */
  async getAdmin(userId: string, password: string) {
    if (userId && password) {
      const res = await lastValueFrom(this.api.get(ApiManager.getAdmins));
      if (res && res.status === true && res.data) {
        return res.data.filter(
          (a: Account) => a.userId === userId && a.password === password
        );
      }
    }
    return null;
  }
  /**
   * 測試成功
   */
  testSuccess() {
    this.api.get(ApiManager.testSuccess).subscribe((res) => {
      if (res && res.status === true && res.data) {
        this.messageService.add({
          severity: 'success',
          summary: '測試',
          detail: '成功',
        });
      }
    });
  }

  /**
   * 測試錯誤
   */
  testError() {
    this.api.get(ApiManager.testError).subscribe((res) => {
      // Nothing to do
    });
  }
}
