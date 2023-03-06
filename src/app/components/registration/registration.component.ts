import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationFormData = {
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact_no: '',
    gender: '',
  };
  male: string = 'male';
  female: string = 'female';
  passwordsMatching = false;
  isConfirmPasswordEmpty = true;
  faEnvelope = faEnvelope;
  faLock = faLock;
  error: any;
  mTimeout: any;
  showSuccessAlert: any;
  showDangerAlert: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const auth = localStorage.getItem('auth');
    if (auth) {
      this.router.navigate(['dashboard']);
    }
  }

  checkPasswords(pw: string, cpw: string) {
    if (cpw !== '') {
      this.isConfirmPasswordEmpty = false;
    }

    if (pw === cpw) {
      this.passwordsMatching = true;
    } else {
      this.passwordsMatching = false;
    }
  }

  registration(registrationFormData: any) {
    this.authService.userRegistration(registrationFormData).subscribe(
      (resp) => {
        this.showSuccessAlert = true;
        this.showDangerAlert = false;
        this.navigateToLoginComponent(this.router);
      },
      (err: any) => {
        this.error = err;
        this.showDangerAlert = true;
        this.showSuccessAlert = false;
      }
    );
  }

  navigateToLoginComponent(router: Router) {
    this.mTimeout = setTimeout(() => {
      clearTimeout(this.mTimeout);
      router.navigate(['login']);
    }, 1500);
  }
}
