import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFunctionalityComponent } from './chat-functionality.component';

describe('ChatFunctionalityComponent', () => {
  let component: ChatFunctionalityComponent;
  let fixture: ComponentFixture<ChatFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFunctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
