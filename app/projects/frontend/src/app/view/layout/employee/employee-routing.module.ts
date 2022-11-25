import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PunchComponent } from './punch/punch.component';
import { AttendanceComponent } from '../common/attendance/attendance.component';

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
