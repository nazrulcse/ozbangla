import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
  openUserDetails: boolean = false;
  openPrivacyPolicty: boolean = false;
  openCourseDetails: boolean = false;
  openmiscellaneous: boolean = false;
  openReport: boolean = false;
  openLoginActivity: boolean = false;
  openMobileApp: boolean = false;
  ngOnInit(): void {
  }

  toggileUserDetails() {
    this.openUserDetails = !this.openUserDetails;
  }
  togglePrivacyPolicy() {
    this.openPrivacyPolicty = !this.openPrivacyPolicty;
  }
  toggleCourseDetails() {
    this.openCourseDetails = !this.openCourseDetails;
  }
  toggleMiscellaneous() {
    this.openmiscellaneous = !this.openmiscellaneous;
  }
  toggleReport() {
    this.openReport = !this.openReport;
  }
  toggleLoginActivity() {
    this.openLoginActivity = !this.openLoginActivity;
  }
  toggleMobileApp() {
    this.openMobileApp = !this.openMobileApp;
  }
}
