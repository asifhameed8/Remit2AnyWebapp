import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionDetailComponent } from '@shared/transaction-detail/transaction-detail.component';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '@shared/loader/loader.component';
import { InrcurrencyPipe } from '@pipe/inrcurrency.pipe';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [
    CommonModule,
    InrcurrencyPipe,
    NgbPaginationModule,
    RouterLink,
    LoaderComponent,
  ],
  templateUrl: './transactions-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent implements OnChanges {
  @Input() title: string;
  @Input() transactionsList: any[] | null;
  @Input() viewAll: boolean = false;
  public pageConfig: any = {
    page: 1,
    pageSize: 5,
    collectionSize: 0,
  };

  constructor(private readonly _modalService: NgbModal) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['transactionsList'].currentValue)
      this.pageConfig.collectionSize = this.transactionsList?.length;
  }

  transactionDetail(obj: any) {
    const modRef = this._modalService.open(TransactionDetailComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
      size: 'lg',
    });
    modRef.componentInstance.transaction = obj;
    modRef.result.then((result) => console.log).catch((error) => console.log);
  }

  pageChange(): void {}
}
