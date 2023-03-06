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
    this.allCourseService.getCourseDetailsBySlug(this.selectedCourseUrl).subscribe((resp) => {
      this.course = resp.result;
    })
  }
}
