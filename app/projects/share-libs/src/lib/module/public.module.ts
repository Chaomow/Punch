import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuModule } from 'primeng/slidemenu';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

/**
 * PublicModule
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    SlideMenuModule,
    PasswordModule,
    CardModule,
    RippleModule,
    ToastModule,
    MessagesModule,
    MessageModule,
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    SlideMenuModule,
    PasswordModule,
    CardModule,
    RippleModule,
    ToastModule,
    MessagesModule,
    MessageModule,
  ],
})
export class PublicModule {}
