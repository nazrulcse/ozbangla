import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }
  loginURL = "http://localhost:8000/api/auth/signin"
  registrationURL = "http://localhost:8000/api/auth/signup"

  userLogin(data: any):Observable<any> {
    return this.http.post(this.loginURL, data);
  }
  userRegistration(user: any): Observable<any> {
    return this.http.post<any>(this.registrationURL, user);
  }
  logout() {
    this.router.navigate(['login'])
  }
}
