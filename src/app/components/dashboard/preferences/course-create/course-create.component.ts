import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AllCoursesService } from 'src/app/services/all-courses.service';
@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss'],
})
export class CourseCreateComponent implements OnInit {
  constructor(private AuthService: AuthService, private AllCoursesService: AllCoursesService) {}

  subcategory = [
    {
      id: 1,
      name: 'php',
    },
    {
      id: 1,
      name: 'java',
    },
    {
      id: 2,
      name: 'javascript',
    },
    {
      id: 2,
      name: 'python',
    },
    {
      id: 3,
      name: 'ruby',
    },
    {
      id: 3,
      name: 'go',
    },
  ];

  createCourseData = {
    title: '',
    description: '',
    price: '',
    course_category_id: '',
    thumbnail: '',
    user_id: ''
  }

  filterSubCategory: any = [];
  activeUser: any;
  ngOnInit(): void {
    this.activeUser = this.AuthService.getActiveUser();
    this.createCourseData.user_id = this.activeUser.id;
  }
  selectCategory(e: any) {
    this.filterSubCategory = this.subcategory.filter((sub) => {
      return sub.id == e.target.value;
    });
    console.log(this.filterSubCategory);
    this.filterSubCategory.forEach((element:any) => {
      console.log(element.name)
    });
  }
  createCourse() {
    this.AllCoursesService.createNewCourse(this.createCourseData).subscribe((resp) => {
      console.log(resp)
    })
  }
}
