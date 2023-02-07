import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  constructor(private courseService: CoursesService) { }

  public allCourses: any = [];
  ngOnInit(): void {
    this.allCourses = this.courseService.getAllCourse();
  }

}
