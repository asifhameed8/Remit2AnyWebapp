import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class WithdrawService {
  baseUsersUrl: string = environment.userDataServiceURL;
  constructor(private http: HttpClient) {}

  getSupportedCryptoTokens(): Observable<any> {
    return this.http.get(`${this.baseUsersUrl}/crypto/supportedTokens`);
  }
}
