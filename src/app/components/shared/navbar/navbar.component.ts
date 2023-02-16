import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
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
    console.log(this.showMessages);
  }

  chatClose(event: any) {
    this.showMessages = event;
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
