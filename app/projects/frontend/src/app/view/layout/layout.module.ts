import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { EmployeeComponent } from './employee/employee.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PublicModule } from '@libs/module/public.module';

/**
 *LayoutModule
 */
@NgModule({
  declarations: [IndexComponent, EmployeeComponent, LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, PublicModule],
})
export class LayoutModule {}
