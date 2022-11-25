import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '@frontend/view/layout/admin/employee/employee.component';
import { AttendanceComponent } from '@frontend/view/layout/common/attendance/attendance.component';
import { ConfigComponent } from '@frontend/view/layout/admin/config/config.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'attendance',
        component: AttendanceComponent,
      },
      {
        path: 'config',
        component: ConfigComponent,
      },
    ],
  },
];

/**
 * 管理員Routing
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
