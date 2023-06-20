import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonToChooseComponent } from './reason-to-choose.component';

describe('ReasonToChooseComponent', () => {
  let component: ReasonToChooseComponent;
  let fixture: ComponentFixture<ReasonToChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonToChooseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReasonToChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
