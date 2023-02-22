import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}
  getAllCourse() {
    return [
      {
        id: 1,
        img: '../../assets/images/python.jpg',
        category: 'Learning Python',
        title: 'Python Programming For Beginner to Advance - B2',
        status: 'published',
        completeRatio: '75%',
        grade: 'A',
      },
      {
        id: 2,
        img: '../../assets/images/ruby.jpg',
        category: 'Learning Ruby',
        title:
          'Ruby On Rails in Web Development and Server Side Application - B4',
        status: 'pending',
        completeRatio: '85%',
        grade: 'A+',
      },
      {
        id: 3,
        img: '../../assets/images/node.jpg',
        category: 'Learning Node.Js',
        title: 'Node.Js. The JavaScript runtime',
        status: 'pending',
        completeRatio: '55%',
        grade: 'A-',
      },
    ];
  }
  getRecentCourse() {
    return [
      {
        id: 3,
        img: '../../assets/images/node.jpg',
        category: 'Learning Node.Js',
        title: 'Node.Js. The JavaScript runtime',
        status: 'pending',
        completeRatio: '55%',
        grade: 'A-',
      },
      {
        id: 4,
        img: '../../assets/images/javascript_course.jpg',
        category: 'Learning JavaScript',
        title: 'JavaScript For Beginners',
        status: 'published',
        completeRatio: '50%',
        grade: 'B',
      },
    ];
  }
  getAllCourseContent() {
    return [
      {
        topic: 'Setting up Your Development Environment',
        subTopic: [
          { name: 'tools we need' },
          { name: 'IDE & lightweight editor' },
          { name: 'Developer Console' },
        ],
      },
    ];
  }
}
