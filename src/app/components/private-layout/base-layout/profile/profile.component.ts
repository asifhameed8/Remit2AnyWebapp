import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UserService } from '@service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';
import { PrivateLayoutService } from '@component/private-layout/private-layout.service';
import { LoaderComponent } from '@shared/loader/loader.component';
import { SharedService } from '@service/shared.service';
import { ProfileCompletness } from '@shared/profile-completeness/profile-completness.model';
import { PerformKycComponent } from '@shared/perform-kyc/perform-kyc.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PhoneNumberEditComponent } from '@shared/phone-number-edit/phone-number-edit.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    LoaderComponent,
    PerformKycComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [SharedService],
})
export class ProfileComponent implements OnInit {
  public profile: any = null;
  public kycAdded: boolean = false;
  public descriptionKYC: string =
    'Complete KYC to set personal details. After KYC if details are not showing reach out to customer care';
  constructor(
    private readonly _userService: UserService,
    private readonly _modalService: NgbModal,
    private readonly _sharedService: SharedService,
    private readonly _privateLayoutService: PrivateLayoutService
  ) {}
  ngOnInit(): void {
    this.getProfileInfo();
    this.KYCInquiry();
  }

  editPhoneNumber() {
    const modRef = this._modalService.open(PhoneNumberEditComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
      size: 'md',
    });
    modRef.componentInstance.PhoneNumberEditComponent = {};
    modRef.result.then((result) => console.log).catch((error) => console.log);
  }

  KYCInquiry() {
    this._sharedService.showLoader();
    this._privateLayoutService.getProfileSetupInfo().subscribe({
      next: (res: ProfileCompletness) => {
        this.kycAdded = res?.kycadded;
      },
      error: (err: HttpErrorResponse) => console.log(err),
      complete: () => this._sharedService.hideLoader(),
    });
  }

  getProfileInfo() {
    this._sharedService.showLoader();
    this._privateLayoutService.getProfile().subscribe({
      next: (res: any) => {
        this.profile = res;
        this.profile.email = this._userService.userDetail.find(
          (item: any) => item.Name == 'email'
        ).Value;
      },
      error: (err: HttpErrorResponse) => console.log(err),
      complete: () => this._sharedService.hideLoader(),
    });
  }
  getReadableDOB(date: Date) {
    // TODO Currently showing DOB w.r.t IST as KYC is only in India
    return moment(date).utcOffset('+05:30').format('MMMM DD, YYYY');
  }
}
