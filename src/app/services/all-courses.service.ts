import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Base } from './base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AllCoursesService {
  constructor(private http: HttpClient) {}
  public apiUrl = Base.apiUrl;
  public getAllCourses(): Observable<any> {
    return this.http.get(this.apiUrl + '/course/list');
  }
}
