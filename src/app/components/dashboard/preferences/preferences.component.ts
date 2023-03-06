import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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
      label: 'Create New Course',
      route: '/preferences/course-create'
    },
    {
      label: 'Manage Courses',
      route: '/manage-course'
    },
    {
      label: 'Course Settings',
      route: '/courses-settings'
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

  constructor(private authService: AuthService) { }
  activeUser: any;
  ngOnInit(): void {
    this.activeUser = this.authService.getActiveUser();
    console.log(this.activeUser)
  }

}
