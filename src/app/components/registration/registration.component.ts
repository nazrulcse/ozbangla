import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { RegistrationService } from 'src/app/services/registration.service';
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
    confirmPassword: '',
    contactNumber: '',
    gender: ''
  }
  male: string = 'male';
  female: string = 'female';
  passwordsMatching = false;
  isConfirmPasswordEmpty = true;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  faEnvelope = faEnvelope;
  faLock = faLock;

  checkPasswords(pw: string, cpw: string) {
    if(cpw !== '') {
      this.isConfirmPasswordEmpty = false;
    }

    if (pw === cpw) {
      this.passwordsMatching = true;
    } else {
      this.passwordsMatching = false;
    }
  }

  registration(loginFormData: any) {
    this.registrationService.userRegistration(loginFormData).subscribe(response => {
      console.log(response);
    })
  }
}
