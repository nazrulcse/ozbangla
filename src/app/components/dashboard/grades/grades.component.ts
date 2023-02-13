import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  constructor(private courseService: CoursesService) { }
  public courses: any;
  ngOnInit(): void {
    this.courses = this.courseService.getAllCourse();
  }
}
