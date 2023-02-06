import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormData = {
    email: '',
    password: '',
    rememberUsername: false
  }

  faEnvelope = faEnvelope;
  faLock = faLock;
  
  constructor() { }

  ngOnInit(): void {}

  login() {
    console.log(this.loginFormData);
  }
}
