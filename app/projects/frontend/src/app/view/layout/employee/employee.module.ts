import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '@libs/module/public.module';
import { EmployeeRoutingModule } from '@frontend/view/layout/employee/employee-routing.module';

/**
 * 員工模組
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, PublicModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
