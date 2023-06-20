import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bank-account-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.scss'],
})
export class BankAccountDetailsComponent {
  @Input() accountDetails: any = {};
  constructor(public activeModal: NgbActiveModal) {}
}
