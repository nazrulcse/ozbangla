import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  openDropDown: boolean = false;
  profileDropDownToggle() {
    this.openDropDown = !this.openDropDown;
  }
}
