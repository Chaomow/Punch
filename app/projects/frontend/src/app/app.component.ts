import { Component, OnInit } from '@angular/core';
import { environment } from '@environment';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

/**
 * AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AppComponent implements OnInit {
  title = environment.title;

  /**
   * constructor
   *
   * @param {PrimeNGConfig} primengConfig PrimeNGConfig
   */
  constructor(private primengConfig: PrimeNGConfig) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
