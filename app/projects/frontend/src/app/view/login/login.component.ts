import { Component } from '@angular/core';
import { environment } from '@environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { admin } from '@libs/data/config';
import { LoginService } from '@libs/service/login.service';
import { LoginInfo } from '@libs/interface/config-interface';
import { employees } from '@libs/data/employee';
import { AesService } from '@libs/service/aes.service';

/**
 * 登入
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = environment.title;
  loginForm: FormGroup = new FormGroup({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  /**
   * @param {MessageService} messageService MessageService
   * @param {LoginService} login LoginService
   * @param {AesService} aes AesService
   */
  constructor(
    private messageService: MessageService,
    private login: LoginService,
    private aes: AesService
  ) {}

  /**
   * 登入
   */
  submit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.doLogin(this.loginForm.getRawValue());
    }
  }
  /**
   * 忘記密碼
   */
  forget(): void {
    this.messageService.add({
      severity: 'warn',
      summary: '忘記密碼',
      detail: '請再想一想...',
    });
  }

  /**
   * 登入
   *
   * @param {any} value value
   * @param {string} value.userId userId
   * @param {string} value.password password
   */
  doLogin(value: { userId: string; password: string }): void {
    const userId = value.userId;
    const password = this.aes.aesEnc(value.password);
    const data: LoginInfo = {
      userId,
    };
    // API
    if (userId === admin.userId && password === admin.password) {
      // 管理員
      data.name = '管理員';
    } else {
      // 員工
      const res = employees.filter(
        (e) => userId === e.userId && password === e.password
      );
      if (res && res[0]) {
        const user = res[0];
        data.name = `${user.userId}-${user.name}(${user.engName})`;
      }
    }
    if (data.name) {
      this.login.setLoginInfo(data);
      this.messageService.add({
        severity: 'success',
        summary: '登入',
        detail: '成功',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: '登入失敗',
        detail: '請重新確認帳號密碼',
      });
    }
  }
}
