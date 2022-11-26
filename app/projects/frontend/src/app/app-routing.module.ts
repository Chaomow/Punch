import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@frontend/view/login/login.component';
import { NotFoundComponent } from '@frontend/view/not-found/not-found.component';
import { CheckLoginStatusGuard } from '@libs/guard/check-login-status.guard';
import { LoginGuard } from '@libs/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        /**
         * lazyload
         *
         * @returns {any} LayoutModule
         */
        loadChildren: (): any =>
          import('@frontend/view/layout/layout.module').then(
            (m) => m.LayoutModule
          ),
        canActivateChild: [LoginGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CheckLoginStatusGuard],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

/**
 * @class AppRoutingModule
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
