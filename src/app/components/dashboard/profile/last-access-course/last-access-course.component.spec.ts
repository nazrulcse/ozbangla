import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAccessCourseComponent } from './last-access-course.component';

describe('LastAccessCourseComponent', () => {
  let component: LastAccessCourseComponent;
  let fixture: ComponentFixture<LastAccessCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastAccessCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastAccessCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
