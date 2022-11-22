import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '@libs/component/view/not-found/not-found.component';
import { HeaderComponent } from '@libs/component/view/layout/header/header.component';
import { MenuComponent } from '@libs/component/view/layout/menu/menu.component';
import { FooterComponent } from '@libs/component/view/layout/footer/footer.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
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
 * PublicModule
 */
@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SlideMenuModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [HeaderComponent, MenuComponent, FooterComponent],
})
export class PublicModule {}
