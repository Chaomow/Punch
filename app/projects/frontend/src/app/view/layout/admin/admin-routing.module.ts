import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AttendanceComponent } from '../common/attendance/attendance.component';
import { ConfigComponent } from './config/config.component';

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
