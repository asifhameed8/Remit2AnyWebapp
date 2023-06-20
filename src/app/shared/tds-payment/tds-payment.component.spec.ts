import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdsPaymentComponent } from './tds-payment.component';

describe('TdsPaymentComponent', () => {
  let component: TdsPaymentComponent;
  let fixture: ComponentFixture<TdsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdsPaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TdsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
