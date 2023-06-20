import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSyncComponent } from './transaction-sync.component';

describe('TransactionSyncComponent', () => {
  let component: TransactionSyncComponent;
  let fixture: ComponentFixture<TransactionSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TransactionSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
