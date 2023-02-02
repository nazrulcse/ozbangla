import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public notifications: any = [];
  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.notifications = this.notificationService.loadAllNotification();
  }


}
