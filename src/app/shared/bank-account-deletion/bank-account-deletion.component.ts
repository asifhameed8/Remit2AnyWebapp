import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PrivateLayoutService } from '@component/private-layout/private-layout.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '@service/user.service';

@Component({
  selector: 'app-bank-account-deletion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bank-account-deletion.component.html',
  styleUrls: ['./bank-account-deletion.component.scss'],
})
export class BankAccountDeletionComponent {
  @Input() accountDetails: any = {};
  constructor(
    private readonly _userService: UserService,
    private readonly _privateLayoutService: PrivateLayoutService,
    public activeModal: NgbActiveModal
  ) {}

  deleteBankAccount() {
    const userId = this._userService.userDetail.find(
      (item: any) => item.Name == 'sub'
    ).Value;
    const obj = {
      active: false,
      userId,
      paymentInstrumentId: this.accountDetails.id,
      contact_id: this.accountDetails.contact_id,
    };
    this._privateLayoutService
      .removeBankAccount(this.accountDetails.id, obj)
      .subscribe({
        next: (res: any) => {
          this.activeModal.close();
        },
        error: (err: HttpErrorResponse) => console.log(err),
      });
  }
}
