import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recent-course',
  templateUrl: './recent-course.component.html',
  styleUrls: ['./recent-course.component.scss'],
})
export class RecentCourseComponent implements OnInit {
  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute
  ) {}

  public allCourses: any = [];
  courseId: any;
  ngOnInit(): void {
    this.allCourses = this.courseService.getRecentCourse();
    this.courseId = this.route.snapshot.paramMap.get('id');
  }
}
