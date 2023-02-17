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
    name: '',
    gender: ''
  }
  male: string = 'male';
  female: string = 'female';


  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  faEnvelope = faEnvelope;
  faLock = faLock;

  registration(loginFormData: any) {
    this.registrationService.userRegistration(loginFormData).subscribe(response => {
      console.log(response);
    })
  }
}
