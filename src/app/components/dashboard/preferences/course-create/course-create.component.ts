import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss'],
})
export class CourseCreateComponent implements OnInit {
  constructor() {}

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

  filterSubCategory: any = [];

  ngOnInit(): void {}
  selectCategory(e: any) {
    this.filterSubCategory = this.subcategory.filter((sub) => {
      return sub.id == e.target.value;
    });
    console.log(this.filterSubCategory);
    this.filterSubCategory.forEach((element:any) => {
      console.log(element.name)
    });
  }
}
