import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

/**
 * 首頁
 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/welcome.json',
  };
}
