import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditComponent } from './phone-number-edit.component';

describe('PhoneNumberEditComponent', () => {
  let component: PhoneNumberEditComponent;
  let fixture: ComponentFixture<PhoneNumberEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhoneNumberEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
