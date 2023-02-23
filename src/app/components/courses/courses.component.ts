import { Component, OnInit } from '@angular/core';
import { AllCoursesService } from 'src/app/services/all-courses.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private allCourseService: AllCoursesService,
    private authService: AuthService
  ) {}

  public allCourses: any = [];
  public activeUser: any;

  ngOnInit(): void {
    this.allCourseService.getAllCourses().subscribe((resp) => {
      this.allCourses = resp.data;
    });
    this.activeUser = this.authService.getActiveUser();
  }
}
