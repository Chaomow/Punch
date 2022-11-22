import { Component, Input } from '@angular/core';

/**
 * HeaderComponent
 */
@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title = '';
}
