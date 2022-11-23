import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@frontend/view/layout/layout.component';
import { IndexComponent } from '@frontend/view/layout/body/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      {
        path: 'index',
        component: IndexComponent,
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
