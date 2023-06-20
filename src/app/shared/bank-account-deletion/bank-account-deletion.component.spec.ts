import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountDeletionComponent } from './bank-account-deletion.component';

describe('BankAccountDeletionComponent', () => {
  let component: BankAccountDeletionComponent;
  let fixture: ComponentFixture<BankAccountDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BankAccountDeletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccountDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
