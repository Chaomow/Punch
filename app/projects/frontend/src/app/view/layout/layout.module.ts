import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '@libs/module/public.module';
import { ReasonPipe } from '@libs/pipe/reason.pipe';
import { LayoutComponent } from '@frontend/view/layout/layout.component';
import { LayoutRoutingModule } from '@frontend/view/layout/layout-routing.module';
import { HeaderComponent } from '@frontend/view/layout/header/header.component';
import { MenuComponent } from '@frontend/view/layout/menu/menu.component';
import { FooterComponent } from '@frontend/view/layout/footer/footer.component';
import { AttendanceComponent } from '@frontend/view/layout/common/attendance/attendance.component';
import { AttendanceDialogComponent } from '@frontend/view/layout/common/attendance/attendance-dialog/attendance-dialog.component';

/**
 *LayoutModule
 */
@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LayoutComponent,
    AttendanceComponent,
    AttendanceDialogComponent,
    ReasonPipe,
  ],
  imports: [CommonModule, LayoutRoutingModule, PublicModule],
})
export class LayoutModule {}
