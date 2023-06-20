import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCryptoComponent } from './select-crypto.component';

describe('SelectCryptoComponent', () => {
  let component: SelectCryptoComponent;
  let fixture: ComponentFixture<SelectCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SelectCryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
