import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-upcoming-activities',
  templateUrl: './upcoming-activities.component.html',
  styleUrls: ['./upcoming-activities.component.scss']
})

export class UpcomingActivitiesComponent implements OnInit {

  public allCourses: any = [];
  public faClock = faClock;
  public faArrowDown = faSort;

  constructor(private courseService: CoursesService) { }

  public dueDate = [
    {value: 'seven-days', viewValue: 'Next 7 Days'},
    {value: 'thirty-days', viewValue: 'Next 30 Days'},
    {value: 'two-months', viewValue: 'Next 2 Months'},
  ];
  public sortByDate = [
    {value: 'sort-by-date', viewValue: 'Sort By Date'},
    {value: 'sort-by-course', viewValue: 'Sort By Course'}

  ];


  ngOnInit(): void {
    this.allCourses = this.courseService.getAllCourse();
  }


}
