import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicModule } from '@libs/module/public.module';
import { AppRoutingModule } from '@frontend/app-routing.module';
import { AppComponent } from '@frontend/app.component';
import { LoginComponent } from '@frontend/view/login/login.component';
import { NotFoundComponent } from '@frontend/view/not-found/not-found.component';
import { IndexComponent } from '@frontend/view/layout/common/index/index.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

/**
 * Note we need a separate function as it's required
 * by the AOT compiler.
 *
 * @returns {any} webpackChunkName: 'lottie-web'
 */
export function playerFactory() {
  return player;
}

/**
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    IndexComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    PublicModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
