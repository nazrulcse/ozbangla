import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  openProfleDropDown: boolean = false;
  settingDropDown: boolean = false;
  showNotification: boolean = false;
  profileDropDownToggle() {
    this.openProfleDropDown = !this.openProfleDropDown;
    this.settingDropDown = false;
    this.showNotification = false;
  }
  settingsDropDownToggle() {
    this.settingDropDown = !this.settingDropDown;
    this.openProfleDropDown = false;
    this.showNotification = false;
  }
  showNotifications() {
    this.showNotification = !this.showNotification;
    this.settingDropDown = false;
    this.openProfleDropDown = false;
  }
}
