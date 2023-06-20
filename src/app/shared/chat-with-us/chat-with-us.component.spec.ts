import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithUsComponent } from './chat-with-us.component';

describe('ChatWithUsComponent', () => {
  let component: ChatWithUsComponent;
  let fixture: ComponentFixture<ChatWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChatWithUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
