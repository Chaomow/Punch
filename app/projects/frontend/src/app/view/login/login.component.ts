import { Component } from '@angular/core';
import { environment } from '@environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
   */
  constructor(private messageService: MessageService) {}

  /**
   * 登入
   *
   * @param {any} formValue formValue
   */
  submit(formValue: any): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
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
