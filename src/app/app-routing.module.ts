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
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
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
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses',
    component: CoursesComponent,
 
  },
  {
    path: 'dashboard/course_details/:id',
    component: CourseDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'grade',
    component: GradesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
