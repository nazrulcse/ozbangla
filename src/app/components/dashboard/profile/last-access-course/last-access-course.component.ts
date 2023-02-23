import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-last-access-course',
  templateUrl: './last-access-course.component.html',
  styleUrls: ['./last-access-course.component.scss']
})
export class LastAccessCourseComponent implements OnInit {
  faClock = faClock;
  constructor(private courseService: CoursesService, private authService: AuthService) { }
  courses: any = [];
  public activeUser: any;
  ngOnInit(): void {
    this.courses = this.courseService.getAllCourse();
    this.activeUser = this.authService.getActiveUser();
  }

}
