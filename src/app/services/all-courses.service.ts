import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Base } from './base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AllCoursesService {
  accessToken: any;
  constructor(private http: HttpClient) {}
  public apiUrl = Base.apiUrl;
  public getAllCourses(): Observable<any> {
    return this.http.get(this.apiUrl + '/course/list');
  }
  public createNewCourse(course: any) {
    return this.http.post<any>(this.apiUrl + '/course', course, {
      headers: Base.requestHeader(),
    });
  }
}
