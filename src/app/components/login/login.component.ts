import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormData = {
    email: '',
    password: '',
    rememberUsername: false,
  };

  faEnvelope = faEnvelope;
  faLock = faLock;
  error: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const auth = localStorage.getItem('auth');
    if (auth) {
      this.authService.isAuthenticated = true;
      this.router.navigate(['dashboard']);
    }
  }

  login(loginFormData: any) {
    this.authService.userLogin(loginFormData).subscribe(
      (response) => {
        window.localStorage.setItem('auth', JSON.stringify(response));
        this.router.navigate(['dashboard']);
        this.authService.isAuthenticated = true;
      },
      (err: any) => {
        this.error = err;
      }
    );
  }
}
