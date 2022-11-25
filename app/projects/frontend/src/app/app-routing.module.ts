import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@frontend/view/login/login.component';
import { NotFoundComponent } from '@frontend/view/not-found/not-found.component';

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
        loadChildren: () =>
          import('@frontend/view/layout/layout.module').then(
            (m) => m.LayoutModule
          ),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
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
