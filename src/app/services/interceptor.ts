import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { CognitoTokenService } from './cognito-token.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(CognitoTokenService);
  return authService.getAccessToken().pipe(
    switchMap((jwtToken) => {
      // clone the request to add the new header.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwtToken}`),
      });
      return next(authReq);
    })
  );
};
