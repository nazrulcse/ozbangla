import { Component, OnInit } from '@angular/core';
import { AllCoursesService } from 'src/app/services/all-courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private allCourseService: AllCoursesService) { }

  public allCourses: any = [];

  ngOnInit(): void {
    this.allCourseService.getAllCourses().subscribe((resp) => {
      this.allCourses = resp.data;
    })
  }

}
