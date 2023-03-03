import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCoursesService } from 'src/app/services/all-courses.service';
import { faShoppingBag, faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-details-info',
  templateUrl: './course-details-info.component.html',
  styleUrls: ['./course-details-info.component.scss'],
})
export class CourseDetailsInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private allCourseService: AllCoursesService
  ) {}

  public selectedCourseUrl: any;
  public allCourse: any;
  public course: any;
  public faShoppingBag = faShoppingBag;
  public faCartPlus = faCartPlus;

  ngOnInit(): void {
    this.selectedCourseUrl = this.route.snapshot.paramMap.get('course_url');
    this.allCourse = this.allCourseService.getAllCourses().subscribe((resp) => {
      this.allCourse = resp.data.data;
      for (let course of this.allCourse) {
        if (this.selectedCourseUrl == course.course_url) {
          this.course = course;
        }
      }
    });
  }
}
