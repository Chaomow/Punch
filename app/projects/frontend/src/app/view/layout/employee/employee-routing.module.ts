import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PunchComponent } from '@frontend/view/layout/employee/punch/punch.component';
import { AttendanceComponent } from '@frontend/view/layout/common/attendance/attendance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'punch', pathMatch: 'full' },
      {
        path: 'punch',
        component: PunchComponent,
      },
      {
        path: 'attendance',
        component: AttendanceComponent,
      },
    ],
  },
];

/**
 * 員工Routing
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
