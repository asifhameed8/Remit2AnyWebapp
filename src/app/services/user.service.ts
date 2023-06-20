import { Injectable } from '@angular/core';
import { Auth, CognitoUser } from '@aws-amplify/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userInfo = new BehaviorSubject<any>(null);
  public getUserInfo = this.userInfo.asObservable();

  constructor() {
    const info = localStorage.getItem('userInfo');
    if (info && info?.length) {
      this.userDetail = JSON.parse(info);
    }
  }

  async isLoggedIn(): Promise<string | boolean> {
    return new Promise((resolve, reject) => {
      if (this.userInfo.value) {
        return resolve(true);
      }
      Auth.currentAuthenticatedUser()
        .then((user: CognitoUser) => {
          if (!user) {
            this.userDetail = '';
            return resolve('');
          }
          user.getUserAttributes((error: any, result: any) => {
            if (error) {
              Auth.currentAuthenticatedUser({ bypassCache: true });
              this.userDetail = '';
              return resolve('');
            } else if (result) {
              this.userDetail = result;
              return resolve(true);
            }
          });
        })
        .catch((error) => {
          this.userDetail = '';
          return resolve('');
        });
    });
  }

  get userDetail() {
    return this.userInfo.getValue();
  }

  set userDetail(val: any) {
    this.userInfo.next(val);
    if (val) {
      localStorage.setItem('userInfo', JSON.stringify(val));
    } else {
      localStorage.removeItem('userInfo');
    }
  }
}
