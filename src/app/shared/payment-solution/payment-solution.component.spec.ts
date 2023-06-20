import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSolutionComponent } from './payment-solution.component';

describe('PaymentSolutionComponent', () => {
  let component: PaymentSolutionComponent;
  let fixture: ComponentFixture<PaymentSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSolutionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
