import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { UserService } from '@service/user.service';
import {
  KYCInitiate,
  KYCInquiryResponse,
  KYCProcess,
  KYCStatus,
} from './kyc-model';
import { KycService } from './kyc.service';
declare var window: any;
@Component({
  selector: 'app-kyc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss'],
})
export class KycComponent implements OnInit {
  private kycStep: KYCStatus;
  public kycBtn: boolean = false;
  public KYCStatus = KYCStatus;
  @ViewChild('not_started') not_started: TemplateRef<any>;
  @ViewChild('started') started: TemplateRef<any>;
  @ViewChild('user_cancelled') user_cancelled: TemplateRef<any>;
  @ViewChild('auto_approved') auto_approved: TemplateRef<any>;
  @ViewChild('manually_approved') manually_approved: TemplateRef<any>;
  @ViewChild('needs_review') needs_review: TemplateRef<any>;
  @ViewChild('error') error: TemplateRef<any>;
  @ViewChild('auto_declined') auto_declined: TemplateRef<any>;
  @ViewChild('manually_declined') manually_declined: TemplateRef<any>;

  public serverError: boolean = false;
  public serverErrorMessage: string;
  public userId: string;
  constructor(
    private readonly _kycService: KycService,
    private readonly _userService: UserService,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.userId = this._userService.userDetail.find(
      (item: any) => item.Name == 'sub'
    ).Value;
    this._changeDetectorRef.detectChanges();
    this.inquiryKYC(this.userId);
  }

  get processStep() {
    const process: any = {
      not_started: this.not_started,
      started: this.started,
      user_cancelled: this.user_cancelled,
      error: this.error,
      needs_review: this.needs_review,
      manually_approved: this.manually_approved,
      auto_approved: this.auto_approved,
      manually_declined: this.manually_declined,
      auto_declined: this.auto_declined,
    };
    return process[KYCStatus[this.kycStep]];
  }

  goBack(value: KYCStatus) {
    this.kycStep = value;
    this.kycBtn = false;
  }

  inquiryKYC(userID: string) {
    this._kycService.getKYCInquiry(userID).subscribe({
      next: (response: KYCInquiryResponse) => {
        if (
          response.kycStatus == KYCStatus[KYCStatus.auto_approved] ||
          response.kycStatus == KYCStatus[KYCStatus.manually_approved]
        ) {
          this.kycStep = response.kycStatus;
        } else {
          this.kycStep = response.kycStatus;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.serverError = true;
        this.serverErrorMessage = err.error || err.message;
      },
    });
  }

  public startKYCProcess() {
    this._kycService.getKYCCredential(this.userId).subscribe({
      next: (response: KYCInitiate) => {
        this.launchHyperVerge(response.token, response.kycUniqueReferenceId);
      },
      error: (err: HttpErrorResponse) => {
        this.serverError = true;
        this.serverErrorMessage = err.error || err.message;
      },
    });
  }

  private submitKYCResult(uuid: string) {
    this._kycService.submitKYC(this.userId, uuid).subscribe({
      next: (response: KYCProcess) => {
        this.setStateKYC(response);
      },
      error: (err: HttpErrorResponse) => {
        this.serverError = true;
        this.serverErrorMessage = err.error || err.message;
      },
    });
  }

  private setStateKYC(response: any) {
    this.kycStep = response.kycStatus;
    this.kycBtn = false;
    switch (this.kycStep) {
      case KYCStatus.manually_approved:
        this.kycBtn = true;
        break;
      case KYCStatus.auto_approved:
        this.kycBtn = true;
        break;
    }
  }

  private launchHyperVerge(token: string, uuid: string) {
    const hyperKycConfig = new window.HyperKycConfig(
      token,
      'digilocker-DBcheck',
      uuid
    );
    this.kycBtn = true;
    const handler = (HyperKycResult: any) => {
      if (HyperKycResult.status == KYCStatus.user_cancelled) {
        this.kycStep = KYCStatus.user_cancelled;
      } else {
        this.submitKYCResult(uuid);
      }
    };
    window.HyperKYCModule.launch(hyperKycConfig, handler);
  }
}
