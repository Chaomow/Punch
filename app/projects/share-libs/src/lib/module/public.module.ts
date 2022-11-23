import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@libs/component/view/layout/header/header.component';
import { MenuComponent } from '@libs/component/view/layout/menu/menu.component';
import { FooterComponent } from '@libs/component/view/layout/footer/footer.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';

/**
 * PublicModule
 */
@NgModule({
  declarations: [HeaderComponent, MenuComponent, FooterComponent],
  imports: [CommonModule, ButtonModule, SlideMenuModule],
  exports: [HeaderComponent, MenuComponent, FooterComponent],
})
export class PublicModule {}
