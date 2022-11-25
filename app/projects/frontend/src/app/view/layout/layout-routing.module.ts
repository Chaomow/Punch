import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@frontend/view/layout/layout.component';
import { IndexComponent } from '@frontend/view/layout/common/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      {
        path: 'admin',
        /**
         * 管理員模組
         *
         * @returns {any} AdminModule
         */
        loadChildren: () =>
          import('@frontend/view/layout/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'employee',
        /**
         * 員工模組
         *
         * @returns {any} EmployeeModule
         */
        loadChildren: () =>
          import('@frontend/view/layout/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
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
