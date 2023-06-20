import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private readonly _http: HttpClient) {}

  post(url: string, data: any, optionalParam?: any): Observable<any> {
    return this._http.post(url, data || {}, optionalParam);
  }

  get(url: string, optionalParam?: any): Observable<any> {
    return this._http.get(url, optionalParam);
  }

  put(url: string, data?: any) {
    return this._http.put(url, data || {});
  }

  patch(url: string, data?: any) {
    return this._http.patch(url, data || {});
  }
  delete(url: string) {
    return this._http.delete(url);
  }
}
