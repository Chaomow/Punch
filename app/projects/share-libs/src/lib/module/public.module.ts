import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';

/**
 * PublicModule
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, SlideMenuModule],
  exports: [SlideMenuModule],
})
export class PublicModule {}
