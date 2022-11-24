import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SlideMenuModule } from 'primeng/slidemenu';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

/**
 * PublicModule
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    SlideMenuModule,
    PasswordModule,
    CardModule,
    RippleModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ToolbarModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule,
    DynamicDialogModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    SlideMenuModule,
    PasswordModule,
    CardModule,
    RippleModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ToolbarModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule,
    DynamicDialogModule,
  ],
})
export class PublicModule {}
