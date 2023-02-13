import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  public userPreferances = [
    {
      label: 'Edit Profile',
      route: '/edit-profile'
    },
    {
      label: 'Change Password',
      route: '/change-password'
    },
    {
      label: 'Course preferences',
      route: '/course-preference'
    },
    {
      label: 'message preferences',
      route: '/message-preference'
    },
    {
      label: 'Forum preferences',
      route: '/forum-preference'
    },
    {
      label: 'Notification preferences',
      route: '/notification-preference'
    },
    {
      label: 'calender preferences',
      route: '/calender-preference'
    }
  ];
  public badgesPreferences = [
    {
      label: 'Manage badges',
      route: '/manage-badges'
    },
    {
      label: 'Badge preferences',
      route: '/badge-preferences'
    },
    {
      label: 'Backpack settings',
      route: '/backpack-settings'
    }
  ];
  public blogPreferences = [
    {
      label: "Blog preferences",
      route: 'blog-preferences'
    },
    {
      label: "external blog",
      route: 'external-blog'
    },
    {
      label: "Register an external blog",
      route: 'register-blog'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
