import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

/**
 * NotFoundComponent
 */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/not-found.json',
  };
}
