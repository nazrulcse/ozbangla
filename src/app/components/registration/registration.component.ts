import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  loginFormData = {
    username: '',
    email: '',
    password: '',
    mobile: '',
    city: '',
    userType: ''
  }

  validation = {
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  faEnvelope = faEnvelope;
  faLock = faLock;

  registration() {
    console.log(this.loginFormData);
  }
}
