import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '@libs/module/public.module';
import { AdminRoutingModule } from '@frontend/view/layout/admin/admin-routing.module';
import { EmployeeComponent } from '@frontend/view/layout/admin/employee/employee.component';
import { EmployeeDialogComponent } from '@frontend/view/layout/admin/employee/employee-dialog/employee-dialog.component';
import { ConfigComponent } from '@frontend/view/layout/admin/config/config.component';
import { EmployeeLevelPipe } from '@libs/pipe/employee-level.pipe';
import { DepartmentPipe } from '@libs/pipe/department.pipe';

/**
 * 管理員模組
 */
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDialogComponent,
    EmployeeLevelPipe,
    DepartmentPipe,
    ConfigComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, PublicModule],
})
export class AdminModule {}
