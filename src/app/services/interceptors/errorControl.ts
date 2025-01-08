import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertService } from '../tools/alert.service';
import { AccountService } from '../http/account.service';

export function errorControl(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const alertService = inject(AlertService);
  const accountService = inject(AccountService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          accountService.isLogin.set(false);
          window.location.replace('auth/logout');
          break;
        case 403:
          console.log('e4');
          break;
        case 400:
          alertService.error({
            title: 'خطا در داده ورودی',
            msg: 'داده ورودی اشتباه است.',
          });
          console.log('e400');
          break;
        case 422:
          break;
        case 405:
          break;
        case 500:
          alertService.error({
            title: 'خطای در سرور',
            msg: 'یک خطای ناشناخته رخ داده است.',
          });
          break;

        default:
          alertService.error({
            title: 'خطای ناشناخته',
            msg: 'یک خطای ناشناخته رخ داده است.',
          });
          break;
      }

      return throwError(() => error);
    })
  );
}
