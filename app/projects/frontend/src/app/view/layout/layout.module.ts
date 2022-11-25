import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '@libs/module/public.module';
import { EmployeeComponent } from '@frontend/view/layout/admin/employee/employee.component';
import { EmployeeDialogComponent } from '@frontend/view/layout/admin/employee/employee-dialog/employee-dialog.component';
import { LayoutComponent } from '@frontend/view/layout/layout.component';
import { LayoutRoutingModule } from '@frontend/view/layout/layout-routing.module';
import { HeaderComponent } from '@frontend/view/layout/header/header.component';
import { MenuComponent } from '@frontend/view/layout/menu/menu.component';
import { FooterComponent } from '@frontend/view/layout/footer/footer.component';
import { EmployeeLevelPipe } from '@libs/pipe/employee-level.pipe';
import { DepartmentPipe } from '@libs/pipe/department.pipe';
import { ConfigComponent } from './admin/config/config.component';
import { PunchComponent } from './employee/punch/punch.component';
import { AttendanceComponent } from './common/attendance/attendance.component';

/**
 *LayoutModule
 */
@NgModule({
  declarations: [
    EmployeeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LayoutComponent,
    EmployeeLevelPipe,
    DepartmentPipe,
    EmployeeDialogComponent,
    ConfigComponent,
    AttendanceComponent,
    PunchComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, PublicModule],
})
export class LayoutModule {}
