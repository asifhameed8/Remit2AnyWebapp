import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpQuestioningComponent } from './help-questioning.component';

describe('HelpQuestioningComponent', () => {
  let component: HelpQuestioningComponent;
  let fixture: ComponentFixture<HelpQuestioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpQuestioningComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpQuestioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
