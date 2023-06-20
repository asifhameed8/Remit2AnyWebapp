import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTopicsComponent } from './popular-topics.component';

describe('PopularTopicsComponent', () => {
  let component: PopularTopicsComponent;
  let fixture: ComponentFixture<PopularTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PopularTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
