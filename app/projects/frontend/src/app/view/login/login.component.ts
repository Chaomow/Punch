import { Component } from '@angular/core';
import { environment } from '@environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoginService } from '@libs/service/login.service';
import { LoginInfo } from '@libs/interface/config-interface';
import { AesService } from '@libs/service/aes.service';
import { EmployeeApiService } from '@frontend/api/employee-api.service';
import { AdminApiService } from '@frontend/api/admin-api.service';
import { Employee } from '@libs/interface/employee-interface';
import { RoleKey } from '@libs/enum/config-enum';

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
   * @param {AdminApiService} adminApi AdminApiService
   * @param {EmployeeApiService} employeeApi EmployeeApiService
   */
  constructor(
    private messageService: MessageService,
    private login: LoginService,
    private aes: AesService,
    private adminApi: AdminApiService,
    private employeeApi: EmployeeApiService
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
    if (RoleKey.ADMIN === userId) {
      // 管理者
      this.adminApi.getAdmin(userId, password).then((admin) => {
        if (admin && admin[0]) {
          data.name = 'Admin 管理者';
        }
        this.afterLogin(data);
      });
    } else {
      // 員工
      this.employeeApi.getEmployees().then((employee) => {
        if (employee) {
          const users = employee.filter(
            (e: Employee) => userId === e.userId && password === e.password
          );
          if (users && users[0]) {
            const user: Employee = users[0];
            data.name = `${user.userId}-${user.name}(${user.engName})`;
          }
        }
        this.afterLogin(data);
      });
    }
  }

  /**
   * 登入後導向
   *
   * @param {LoginInfo} data LoginInfo
   */
  afterLogin(data: LoginInfo): void {
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
