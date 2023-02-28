import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AllCoursesService } from 'src/app/services/all-courses.service';
@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss'],
})
export class CourseCreateComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private AllCoursesService: AllCoursesService
  ) {}

  courseCategory = [
    {
      id: 1,
      course_sub_category_id: 1,
      name: 'php',
    },
    {
      id: 1,
      course_sub_category_id: 2,
      name: 'java',
    },
    {
      id: 2,
      course_sub_category_id: 3,
      name: 'javascript',
    },
    {
      id: 2,
      course_sub_category_id: 4,
      name: 'python',
    },
    {
      id: 3,
      course_sub_category_id: 5,
      name: 'ruby',
    },
    {
      id: 3,
      course_sub_category_id: 6,
      name: 'go',
    },
  ];

  createCourseData = {
    title: '',
    description: '',
    price: '',
    course_category_id: 0,
    thumbnail: '',
    user_id: '',
    course_sub_category_id: 0,
  };

  filterSubCategory: any = [];
  activeUser: any;
  ngOnInit(): void {
    this.activeUser = this.AuthService.getActiveUser();
    this.createCourseData.user_id = this.activeUser.id;
  }
  selectCategory(e: any) {
    this.filterSubCategory = this.courseCategory.filter((sub) => {
      this.createCourseData.course_category_id = parseInt(e.target.value);
      return sub.id == e.target.value;
    });
  }
  selectSubCategory(e: any) {
    this.createCourseData.course_sub_category_id = parseInt(e.target.value);
  }
  createCourse() {
    this.AllCoursesService.createNewCourse(this.createCourseData).subscribe(
      (resp) => {
        console.log(resp);
      }
    );
  }
}
