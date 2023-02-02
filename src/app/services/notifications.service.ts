import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notificationData = [
    {
      title: 'Module 2: Git and GitHub for Programmers.'
    },
    {
      title: 'Module 3: JavaScript Prototype and Prototype Chain.'
    },
    {
      title: 'Module 4: Angular Dependency Injections and RXJS.'
    },
    {
      title: 'Module 5: Think in a Redux Way with Sumit Saha.'
    },
    {
      title: 'Module 6: JavaScript All You need to Know with HM Nayeem'
    },
    {
      title: 'Module 7: Git and GitHub for Programmers.'
    },
    {
      title: 'Module 8: JavaScript Prototype and Prototype Chain.'
    },
    {
      title: 'Module 9: Angular Dependency Injections and RXJS.'
    },
    {
      title: 'Module 10: Think in a Redux Way with Sumit Saha.'
    },
    {
      title: 'Module 11: JavaScript All You need to Know with HM Nayeem'
    }
  ];
  constructor() {}
  loadAllNotification() {
    return this.notificationData;
  }
}
