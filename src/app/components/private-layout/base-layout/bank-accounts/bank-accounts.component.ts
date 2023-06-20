import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankAccountDetailsComponent } from '@shared/bank-account-details/bank-account-details.component';
import { BankAccountDeletionComponent } from '@shared/bank-account-deletion/bank-account-deletion.component';
import { AddBankAccountComponent } from '@shared/add-bank-account/add-bank-account.component';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '@service/shared.service';
import { ProfileCompletness } from '@shared/profile-completeness/profile-completness.model';
import { PrivateLayoutService } from '@component/private-layout/private-layout.service';
import { LoaderComponent } from '@shared/loader/loader.component';
import { PerformKycComponent } from '@shared/perform-kyc/perform-kyc.component';

@Component({
  selector: 'app-bank-accounts',
  standalone: true,
  imports: [CommonModule, LoaderComponent, PerformKycComponent],
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss'],
  providers: [SharedService],
})
export class BankAccountsComponent implements OnInit {
  public bankList: any[];
  public kycAdded: boolean = false;
  public descriptionKYC: string =
    'Please complete KYC process to add bank accounts.';

  constructor(
    private readonly _privateLayoutService: PrivateLayoutService,
    private readonly _sharedService: SharedService,
    private readonly _modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.KYCInquiry();
  }

  KYCInquiry() {
    this._sharedService.showLoader();
    this._privateLayoutService.getProfileSetupInfo().subscribe({
      next: (res: ProfileCompletness) => {
        this.kycAdded = res?.kycadded;
        if (res?.kycadded) {
          this.getBankInfo();
        } else {
          this.bankList = [];
          this._sharedService.hideLoader();
        }
      },
      error: (err: HttpErrorResponse) => this._sharedService.hideLoader(),
    });
  }

  getBankInfo() {
    this._privateLayoutService.getAddedBank().subscribe({
      next: (res: any) => {
        this.bankList = res || [];
      },
      error: (err: HttpErrorResponse) => console.log(err),
      complete: () => this._sharedService.hideLoader(),
    });
  }

  bankAccountDetails(detail: any) {
    const modRef = this._modalService.open(BankAccountDetailsComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
      size: 'lg',
    });
    modRef.componentInstance.accountDetails = detail;
  }

  bankAccountDeletion(detail: any, index: number) {
    const modRef = this._modalService.open(BankAccountDeletionComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
      size: 'md',
    });
    modRef.componentInstance.accountDetails = detail;
    modRef.result
      .then(() => {
        this.bankList.splice(index, 1);
      })
      .catch((error) => console.log);
  }

  addBankAccount() {
    const modRef = this._modalService.open(AddBankAccountComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
      size: 'md',
    });
    modRef.componentInstance.transaction = {};
    modRef.result.then((result) => console.log).catch((error) => console.log);
  }
}
