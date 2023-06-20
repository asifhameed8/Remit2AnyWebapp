import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowsWorkComponent } from './hows-work.component';

describe('HowsWorkComponent', () => {
  let component: HowsWorkComponent;
  let fixture: ComponentFixture<HowsWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowsWorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
