import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  constructor(private courseService: CoursesService, private authService: AuthService) { }

  public courses: any;
  public activeUser: any;

  ngOnInit(): void {
    this.courses = this.courseService.getAllCourse();
    this.activeUser = this.authService.getActiveUser();
  }
}
