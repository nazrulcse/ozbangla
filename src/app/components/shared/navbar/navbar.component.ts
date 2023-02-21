import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}
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
    this.settingDropDown = false;
    this.showNotification = false;
    this.showMessages = false;
  }
  settingsDropDownToggle() {
    this.settingDropDown = !this.settingDropDown;
    this.openProfleDropDown = false;
    this.showNotification = false;
    this.showMessages = false;
  }
  showNotifications() {
    this.showNotification = !this.showNotification;
    this.settingDropDown = false;
    this.openProfleDropDown = false;
    this.showMessages = false;
  }
  showAllMessages() {
    this.showMessages = true;
    this.settingDropDown = false;
    this.openProfleDropDown = false;
    this.showNotification = false;
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
    window.location.href = '/login';
    this.authService.logout();
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
