import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}
  loginURL = 'http://localhost:8000/api/auth/signin';
  registrationURL = 'http://localhost:8000/api/auth/signup';

  public userLogin(data: any): Observable<any> {
    return this.http.post(this.loginURL, data);
  }
  public userRegistration(user: any): Observable<any> {
    return this.http.post<any>(this.registrationURL, user);
  }
  public logout() {
    this.requestHeader();
  }
  public getAuthToken() {
    let auth: any = window.localStorage.getItem('auth');
    let parse_auth = JSON.parse(auth);
    return parse_auth ? parse_auth.accessToken : "";
  }
  private requestHeader() {
    return { headers: { Authorization: `Bearer ${this.getAuthToken()}` } };
  }
}
