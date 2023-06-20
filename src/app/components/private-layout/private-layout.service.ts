import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BaseService } from '@service/base.service';
import { UserService } from '@service/user.service';
@Injectable({
  providedIn: 'root',
})
export class PrivateLayoutService extends BaseService {
  private userId: string;
  constructor(
    private readonly _userService: UserService,
    _httpClient: HttpClient
  ) {
    super(_httpClient);
    this.userId = this._userService.userDetail.find(
      (item: any) => item.Name == 'sub'
    ).Value;
  }

  getProfile() {
    const url = `${environment.usersUrl}/${this.userId}/profile`;
    return this.get(url);
  }
  getTransaction() {
    const url = `${environment.usersUrl}/${this.userId}/payouts`;
    return this.get(url);
  }
  getProfileSetupInfo() {
    const url = `${environment.usersUrl}/${this.userId}/userProfileCompleteness`;
    return this.get(url);
  }
  getAddedBank() {
    const url = `${environment.usersUrl}/${this.userId}/paymentInstruments`;
    return this.get(url);
  }
  removeBankAccount(paymentInstrumentId: string, data: any) {
    const url = `${environment.usersUrl}/${this.userId}/paymentInstrument/${paymentInstrumentId}`;
    return this.patch(url, data);
  }
}
