import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from './route.service';
import { MessageService } from 'primeng/api';
import { UtilService } from './util.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, Observer, tap, throwError } from 'rxjs';

/**
 * API
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * @param {HttpClient} http HttpClient
   * @param {RouteService} route RouteService
   * @param {UtilService} util UtilService
   * @param {MessageService} messageService MessageService
   */
  constructor(
    private http: HttpClient,
    private route: RouteService,
    private util: UtilService,
    private messageService: MessageService
  ) {}

  /**
   * GET
   *
   * @param {string} url api 路徑
   * @returns {Observable<any>} res
   */
  get(url: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.http
        .get(url)
        .pipe(
          tap((res) => console.log(res)),
          catchError((error: HttpErrorResponse) => this.handleError(error))
        )
        .subscribe({
          /**
           * next
           *
           * @param {any} res res
           */
          next: (res: any) => {
            if (res && res.status === true) {
              observer.next(res);
              observer.complete();
            } else {
              this.showErrorMessage();
            }
          },
          /**
           * error
           *
           * @param {any} err error
           */
          error: (err: any) => {
            console.error('HTTP Error', err);
            this.showErrorMessage();
          },
          /**
           * complete
           */
          complete: () => {
            // HTTP request completed.
          },
        });
    });
  }

  /**
   * 錯誤處理
   *
   * @param {HttpErrorResponse} err HttpErrorResponse
   * @returns {throwError} throwError
   */
  private handleError(err: HttpErrorResponse): Observable<never> {
    console.error(JSON.stringify(err));
    this.util.cleanUser();
    return throwError(() => new Error(err.error.message));
  }

  /**
   * 錯誤訊息
   */
  private showErrorMessage() {
    this.util.cleanUser();
    this.route.go('login');
    this.messageService.add({
      severity: 'error',
      summary: '系統訊息',
      detail: `發生無法預期的錯誤`,
      life: 3000,
    });
  }
}
