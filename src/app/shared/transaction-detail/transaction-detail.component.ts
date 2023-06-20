import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InrcurrencyPipe } from '@pipe/inrcurrency.pipe';
import { GlobalConstants } from '@utils/global.constants';
@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, InrcurrencyPipe],
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent {
  @Input() transaction: any;
  public appName : string = GlobalConstants.APP_NAME;

  constructor(public activeModal: NgbActiveModal) {}
}
