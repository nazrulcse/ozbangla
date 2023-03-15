import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AllCoursesService } from 'src/app/services/all-courses.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss'],
})
export class ManageCourseComponent implements OnInit {
  constructor(
    private router: Router,
    private AuthService: AuthService,
    private AllCoursesService: AllCoursesService
  ) {}

  courseCategory = [
    {
      id: 1,
      course_sub_category_id: 1,
      name: 'JavaScript',
    },
    {
      id: 1,
      course_sub_category_id: 2,
      name: 'Angular',
    },
    {
      id: 2,
      course_sub_category_id: 3,
      name: 'MySQL',
    },
    {
      id: 2,
      course_sub_category_id: 4,
      name: 'Ruby',
    },
    {
      id: 3,
      course_sub_category_id: 5,
      name: 'Android',
    },
    {
      id: 3,
      course_sub_category_id: 6,
      name: 'Kotlin',
    },
  ];

  createCourseData = {
    title: '',
    description: '',
    price: '',
    course_category_id: 0,
    thumbnail: File,
    user_id: '',
    course_sub_category_id: 0,
  };

  filterSubCategory: any = [];
  selectedFile: any;
  activeUser: any;
  success: boolean = false;
  error: boolean = false;

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

  processFile(file: any) {
    this.selectedFile = file.files[0];
  }

  createCourse() {
    const formData = this.courseCategoryDataToFormData();
    this.AllCoursesService.createNewCourse(formData).subscribe(
      (resp) => {
        this.createCourseData = {
          title: '',
          description: '',
          price: '',
          course_category_id: 0,
          thumbnail: File,
          user_id: '',
          course_sub_category_id: 0,
        };
        this.success = true;
        this.error = false;
      },
      (err) => {
        this.error = true;
        this.success = false;
      }
    );
  }

  courseCategoryDataToFormData(): FormData {
    var formdata = new FormData();
    formdata.append('user_id', this.createCourseData.user_id);
    formdata.append(
      'course_category_id',
      this.createCourseData.course_category_id.toString()
    );
    formdata.append(
      'course_sub_category_id',
      this.createCourseData.course_sub_category_id.toString()
    );
    formdata.append('title', this.createCourseData.title);
    formdata.append('description', this.createCourseData.description);
    formdata.append('price', this.createCourseData.price);
    formdata.append('thumbnail', this.selectedFile, this.selectedFile.name);
    return formdata;
  }
}
