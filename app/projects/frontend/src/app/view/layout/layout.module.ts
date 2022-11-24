import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '@libs/module/public.module';
import { IndexComponent } from '@frontend/view/layout/body/index/index.component';
import { EmployeeComponent } from '@frontend/view/layout/body/employee/employee.component';
import { EmployeeDialogComponent } from '@frontend/view/layout/body/employee/employee-dialog/employee-dialog.component';
import { LayoutComponent } from '@frontend/view/layout/layout.component';
import { LayoutRoutingModule } from '@frontend/view/layout/layout-routing.module';
import { HeaderComponent } from '@frontend/view/layout/header/header.component';
import { MenuComponent } from '@frontend/view/layout/menu/menu.component';
import { FooterComponent } from '@frontend/view/layout/footer/footer.component';
import { EmployeeLevelPipe } from '@libs/pipe/employee-level.pipe';
import { DepartmentPipe } from '@libs/pipe/department.pipe';

/**
 *LayoutModule
 */
@NgModule({
  declarations: [
    IndexComponent,
    EmployeeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LayoutComponent,
    EmployeeLevelPipe,
    DepartmentPipe,
    EmployeeDialogComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, PublicModule],
})
export class LayoutModule {}
