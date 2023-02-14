import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { UserInfoContainerComponent } from './components/dashboard/user-info-container/user-info-container.component';
import { AllCoursesComponent } from './components/dashboard/all-courses/all-courses.component';
import { RecentCourseComponent } from './components/dashboard/recent-course/recent-course.component';
import { LoginComponent } from './components/login/login.component';
import { UpcomingActivitiesComponent } from './components/dashboard/upcoming-activities/upcoming-activities.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableFilesComponent } from './components/dashboard/available-files/available-files.component';
import { OnlineUsersComponent } from './components/dashboard/online-users/online-users.component';
import { BadgesComponent } from './components/dashboard/badges/badges.component';
import { EventsComponent } from './components/dashboard/events/events.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NotificationComponent } from './components/dashboard/notification/notification.component';
import { ChatComponent } from './components/dashboard/chat/chat.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CourseDetailsComponent } from './components/dashboard/course-details/course-details.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { UserDetailsComponent } from './components/dashboard/profile/user-details/user-details.component';
import { LastAccessCourseComponent } from './components/dashboard/profile/last-access-course/last-access-course.component';
import { GradesComponent } from './components/dashboard/grades/grades.component';
import { PreferencesComponent } from './components/dashboard/preferences/preferences.component';
import { RoomComponent } from './components/dashboard/chat/room/room.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    UserInfoContainerComponent,
    AllCoursesComponent,
    RecentCourseComponent,
    LoginComponent,
    UpcomingActivitiesComponent,
    AvailableFilesComponent,
    OnlineUsersComponent,
    BadgesComponent,
    EventsComponent,
    NotificationComponent,
    ChatComponent,
    RegistrationComponent,
    CourseDetailsComponent,
    ProfileComponent,
    UserDetailsComponent,
    LastAccessCourseComponent,
    GradesComponent,
    PreferencesComponent,
    RoomComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
 }
