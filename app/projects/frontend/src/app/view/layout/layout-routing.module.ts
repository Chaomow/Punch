import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@frontend/view/layout/layout.component';
import { IndexComponent } from '@frontend/view/layout/body/index/index.component';
import { EmployeeComponent } from './body/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        component: IndexComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
    ],
  },
];

/**
 * LayoutRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
