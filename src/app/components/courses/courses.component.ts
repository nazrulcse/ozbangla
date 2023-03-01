import { Component, OnInit } from '@angular/core';
import { number } from 'joi';
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
  public totalPaginationNumber: number = 0;
  currentNumber = 0;

  searchCourseData: any = {
    courseName: '',
  };

  ngOnInit(): void {
    this.allCourseService.getAllCourses().subscribe((resp) => {
      this.allCourses = resp.data.data;
      this.totalPaginationNumber = parseInt(resp.data.totalPages);
    });
    this.activeUser = this.authService.getActiveUser();
  }
  counter(i: number) {
    return new Array(i);
  }

  getCourseByPagination(num: any) {
    this.currentNumber = num;
    console.log(this.currentNumber);
    this.allCourseService.getCourseByPaginationNumber(num).subscribe((resp) => {
      this.allCourses = resp.data.data;
    });
  }

  paginateToPrevious(prevNumber: any) {
    if (prevNumber >= 0) {
      this.allCourseService
        .getCourseByPaginationNumber(prevNumber)
        .subscribe((resp) => {
          this.allCourses = resp.data.data;
        });
    }
  }

  paginateToNext(nextNumber: any) {
    console.log(nextNumber);
    this.allCourseService
      .getCourseByPaginationNumber(nextNumber)
      .subscribe((resp) => {
        this.allCourses = resp.data.data;
      });
  }

  searchCourse() {
    this.allCourseService
      .searchCourseByTitle(this.searchCourseData.courseName, this.currentNumber)
      .subscribe((resp) => {
        console.log(resp)
        this.totalPaginationNumber = parseInt(resp.data.totalPages);
        this.allCourses = resp.data.data;
      });
  }
}
