import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  public loader: BehaviorSubject<boolean> = new BehaviorSubject(false);

  showLoader() {
    this.loader.next(true);
  }
  hideLoader() {
    this.loader.next(false);
  }
}
