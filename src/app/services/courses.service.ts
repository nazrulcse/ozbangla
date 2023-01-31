import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}
  getAllCourse() {
    return [
      {
        img: '../../assets/images/python.png',
        category: 'Learning Python',
        title: 'Python Programming For Beginner to Advance - B2',
        status: 'published',
        completeRatio: '85%',
      },
      {
        img: '../../assets/images/ruby.webp',
        category: 'Learning Ruby',
        title: 'Ruby On Rails in Web Development and Server Side Application - B4',
        status: 'pending',
        completeRatio: '85%',
      },
    ];
  }
  getRecentCourse() {
    return [
      {
        img: '../../assets/images/javascript_course.jpg',
        category: 'Learning JavaScript',
        title: 'JavaScript For Beginners',
        status: 'published',
        completeRatio: '85%'
      },
      {
        img: '../../assets/images/ruby.webp',
        category: 'Learning Ruby',
        title: 'Ruby On Rails in Web Development and Server Side Application - B4',
        status: 'pending',
        completeRatio: '85%',
      },
    ]
  }
}
