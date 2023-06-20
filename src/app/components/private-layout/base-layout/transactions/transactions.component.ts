import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from '@shared/transactions-list/transactions-list.component';
import { HttpErrorResponse } from '@angular/common/http';
import { TransactionSyncComponent } from '@shared/transaction-sync/transaction-sync.component';
import { SharedService } from '@service/shared.service';
import { PrivateLayoutService } from '@component/private-layout/private-layout.service';
import { DateRangePickerComponent } from '@shared/date-range-picker/date-range-picker.component';
import * as moment from 'moment';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    TransactionsListComponent,
    TransactionSyncComponent,
    DateRangePickerComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  providers: [SharedService],
})
export class TransactionsComponent implements OnInit {
  public title = 'All Transactions';
  public transactionsList: any[] | null;
  private allTransactions: any[] = [];
  public resetState: boolean = false;
  constructor(
    private readonly _sharedService: SharedService,
    private readonly _privateLayoutService: PrivateLayoutService
  ) {}

  ngOnInit(): void {
    this.getAllTransaction();
  }

  getAllTransaction() {
    this._sharedService.showLoader();
    this._privateLayoutService.getTransaction().subscribe({
      next: (res: any) => {
        this.allTransactions = this.transactionsList = res || [];
      },
      error: (err: HttpErrorResponse) => console.log(err),
      complete: () => {
        this._sharedService.hideLoader();
        this.resetState = false;
      },
    });
  }

  reset() {
    this.transactionsList = Object.assign([], this.allTransactions);
  }

  dateRange(obj: any) {
    this.transactionsList = this.allTransactions.filter(
      (item) =>
        //set time zero for comparing with date month and year
        moment(
          moment(item.created_at).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          })
        ).isSameOrAfter(moment(obj.from)) &&
        moment(
          moment(item.created_at).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          })
        ).isSameOrBefore(moment(obj.to))
    );
  }

  syncTransactions() {
    this.resetState = true;
    this.transactionsList = null;
    this.getAllTransaction();
  }
}
