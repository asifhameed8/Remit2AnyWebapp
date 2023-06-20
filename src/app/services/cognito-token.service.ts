import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CognitoTokenService {
  getAccessToken(): Observable<string> {
    return from(Auth.currentSession()).pipe(
      switchMap((session) => from(of(session.getAccessToken().getJwtToken())))
    );
  }
}
