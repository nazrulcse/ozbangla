import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router
  ) {}
  public activeUser: any;
  ngOnInit(): void { }

  openProfleDropDown: boolean = false;
  settingDropDown: boolean = false;
  showNotification: boolean = false;
  showMessages: boolean = false;

  // mobile responsive part toggle
  showMoreCourse: boolean = false;
  showProfileDropDownInMobile: boolean = false;
  showSideBar: boolean = false;

  profileDropDownToggle() {
    this.openProfleDropDown = !this.openProfleDropDown;
    this.activeUser = this.authService.getActiveUser();
  }
  clickProfileButtonOutside(e: Event) {
    this.openProfleDropDown = false;
  }
  settingsDropDownToggle() {
    this.settingDropDown = !this.settingDropDown;
  }
  clickSettingsButtonOutside(e: Event) {
    this.settingDropDown = false;
  }
  showNotifications() {
    this.showNotification = !this.showNotification;
  }
  clickNotificationButtonOutside(e: Event) {
    this.showNotification = false;
  }
  showAllMessages() {
    this.showMessages = true;
  }
  chatClose(event: any) {
    this.showMessages = event;
  }
  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.isAuthenticated = false;
    window.localStorage.removeItem('auth');
    this.authService.logout();
    window.location.href = "/login";
  }

  // mobile responsive part
  showCourses() {
    this.showMoreCourse = !this.showMoreCourse;
  }
  showSideBarOptions() {
    this.showSideBar = !this.showSideBar;
  }
  showProfileDropDown() {
    this.showProfileDropDownInMobile = !this.showProfileDropDownInMobile;
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
