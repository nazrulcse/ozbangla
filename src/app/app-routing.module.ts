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
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'dashboard/course_details/:id',
    component: CourseDetailsComponent,
  },
  {
    path:  'messages',
    component: MessagesComponent
  },
  {
    path: 'grade',
    component: GradesComponent,
  },
  {
    path: 'preferences',
    component: PreferencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
