import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@service/base.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { KYCInitiate, KYCInquiryResponse, KYCProcess } from './kyc-model';

@Injectable({
  providedIn: 'root',
})
export class KycService extends BaseService {
  constructor(_httpClient: HttpClient) {
    super(_httpClient);
  }

  getKYCCredential(userID: string): Observable<KYCInitiate> {
    const url = `${environment.usersUrl}/${userID}/kycCredential`;
    return this.get(url);
  }

  getKYCInquiry(userID: string): Observable<KYCInquiryResponse> {
    const url = `${environment.usersUrl}/${userID}/kycInquiry`;
    return this.get(url);
  }

  submitKYC(userID: string, transactionId: string): Observable<KYCProcess> {
    const url = `${environment.usersUrl}/${userID}/submitKYC/${transactionId}`;
    return this.post(url, {});
  }
}
