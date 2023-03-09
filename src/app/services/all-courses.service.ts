import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Base } from './base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AllCoursesService {
  accessToken: any;
  public apiUrl = Base.apiUrl;

  constructor(private http: HttpClient) {}

  public getAllCourses(): Observable<any> {
    return this.http.get(this.apiUrl + '/course/list?page=0&size=9');
  }

  public getCourseByPaginationNumber(pageNo: any): Observable<any> {
    return this.http.get(this.apiUrl + `/course/list?page=${pageNo}&size=9`);
  }

  public createNewCourse(data: any) {
    return this.http.post<any>(this.apiUrl + '/course', data, {
      headers: Base.requestHeader(),
    });
  }

  public searchCourseByTitle(title: any, pageNo: any): Observable<any> {
    return this.http.get(
      this.apiUrl + `/course/list?page=${pageNo}&size=9&title=${title}`
    );
  }

  public getCourseDetailsBySlug(slug: any): Observable<any> {
    return this.http.get(this.apiUrl + `/course/details?slug=${slug}`);
  }
  public loadCourseModules() {
    return [
      {
        moduleNo: 1,
        moduleName: 'Build an Angular project from scratch',
        videoLink: 'https://www.youtube.com/embed/k5E2AVpwsko'
      },
      {
        moduleNo: 2,
        moduleName: 'Working with Templates',
        videoLink: 'https://www.youtube.com/embed/0LhBvp8qpro'
      },
      {
        moduleNo: 3,
        moduleName: 'Data binding and forms',
        videoLink: 'https://www.youtube.com/embed/L1pfd9iHaWw'
      },
      {
        moduleNo: 4,
        moduleName: 'Directives and Transclusion',
        videoLink: 'https://www.youtube.com/embed/k5E2AVpwsko'
      },
      {
        moduleNo: 5,
        moduleName: 'Routing and navigation',
        videoLink: 'https://www.youtube.com/embed/0LhBvp8qpro'
      },
      {
        moduleNo: 6,
        moduleName: 'Call REST services',
        videoLink: 'https://www.youtube.com/embed/L1pfd9iHaWw'
      }
    ]
  }
}
