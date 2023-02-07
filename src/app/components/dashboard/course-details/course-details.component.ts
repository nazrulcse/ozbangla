import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private courseService: CoursesService
  ) {}

  courseId: any;
  allCourses: any;
  recentCourses: any;
  isCourse: boolean = false;
  course: any;

  ngOnInit(): void {

    this.courseId = this.route.snapshot.paramMap.get('id');

    this.allCourses = this.courseService.getAllCourse();
    this.recentCourses = this.courseService.getRecentCourse();

    for(let course of this.allCourses) {
      if(this.courseId == course.id) {
        this.isCourse = true;
        this.course = course;
      }
    }

    for(let course of this.recentCourses) {
      if(this.courseId == course.id) {
        this.isCourse = true;
        this.course = course;
      }
    }
  }
}
