import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneywithdrawProcessComponent } from './moneywithdraw-process.component';

describe('MoneywithdrawProcessComponent', () => {
  let component: MoneywithdrawProcessComponent;
  let fixture: ComponentFixture<MoneywithdrawProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneywithdrawProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoneywithdrawProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
