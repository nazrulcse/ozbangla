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
  showMessages: boolean = false;
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
    console.log(this.showMessages)
  }

  chatClose(event: any) {
    this.showMessages = event;
  }
}
