import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { NotFoundComponent } from './view/not-found/not-found.component';

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
  declarations: [AppComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
