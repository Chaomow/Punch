import { Component } from '@angular/core';
import { environment } from '@environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouteService } from '@libs/service/route.service';
import { MessageService } from 'primeng/api';

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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  isLoading = false;

  /**
   * constructor
   *
   * @param {MessageService} messageService 訊息
   * @param {RouteService} routeService 路由
   */
  constructor(
    private messageService: MessageService,
    private routeService: RouteService
  ) {}

  /**
   * 登入
   */
  submit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.routeService.go('index');
      this.messageService.add({
        severity: 'success',
        summary: '登入',
        detail: '成功',
      });
    }
  }
  /**
   * 忘記密碼
   */
  forget() {
    this.messageService.add({
      severity: 'warn',
      summary: '忘記密碼',
      detail: '請再想一想...',
    });
  }
}
