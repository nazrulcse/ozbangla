import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
@Component({
  selector: 'app-recent-course',
  templateUrl: './recent-course.component.html',
  styleUrls: ['./recent-course.component.scss']
})
export class RecentCourseComponent implements OnInit {

  constructor(private courseService: CoursesService) { }

  public allCourses: any = []

  ngOnInit(): void {
    this.allCourses = this.courseService.getRecentCourse();
  }

}
