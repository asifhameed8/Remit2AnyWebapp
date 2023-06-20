import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-sync',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-sync.component.html',
  styleUrls: ['./transaction-sync.component.scss'],
})
export class TransactionSyncComponent {
  @Output() reSync: EventEmitter<void> = new EventEmitter();

  syncTransaction() {
    this.reSync.emit();
  }
}
