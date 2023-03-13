import { TestComponent } from './components/admin/test/test.component';
import { AdminComponent } from './components/admin/admin.component';
import { CourseCreateComponent } from './components/dashboard/preferences/course-create/course-create.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';
import { PreferencesComponent } from './components/dashboard/preferences/preferences.component';
import { GradesComponent } from './components/dashboard/grades/grades.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { CourseDetailsComponent } from './components/dashboard/course-details/course-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseDetailsInfoComponent } from './components/courses/course-details-info/course-details-info.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'courses/:course_url',
    component: CourseDetailsInfoComponent,
  },
  {
    path: 'dashboard/course_details/:id',
    component: CourseDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'grade',
    component: GradesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences/course-create',
    component: CourseCreateComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: 'test',
        component: TestComponent
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
