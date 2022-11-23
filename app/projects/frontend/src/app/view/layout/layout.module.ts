import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '@libs/module/public.module';
import { IndexComponent } from './body/index/index.component';
import { EmployeeComponent } from './body/employee/employee.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

/**
 *LayoutModule
 */
@NgModule({
  declarations: [
    IndexComponent,
    EmployeeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, PublicModule],
})
export class LayoutModule {}
