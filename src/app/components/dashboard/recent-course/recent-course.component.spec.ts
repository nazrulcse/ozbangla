import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCourseComponent } from './recent-course.component';

describe('RecentCourseComponent', () => {
  let component: RecentCourseComponent;
  let fixture: ComponentFixture<RecentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
