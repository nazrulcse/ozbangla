import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8000/api/auth/signup';

  userRegistration(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }
}
