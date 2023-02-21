import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Base } from './base';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  constructor(private http: HttpClient, private router: Router) {}
  apiUrl = Base.apiUrl;

  public userLogin(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/auth/signin', data);
  }
  public userRegistration(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/auth/signup', user);
  }
  public logout() {
    this.requestHeader();
  }
  public getAuthToken() {
    let auth: any = window.localStorage.getItem('auth');
    let parse_auth = JSON.parse(auth);
    return parse_auth ? parse_auth.accessToken : '';
  }
  private requestHeader() {
    return { headers: { Authorization: `Bearer ${this.getAuthToken()}` } };
  }
}
