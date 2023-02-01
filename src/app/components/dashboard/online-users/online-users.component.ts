import { Component, OnInit } from '@angular/core';
import { OnlineUsersService } from 'src/app/services/online-users.service';
@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.scss']
})
export class OnlineUsersComponent implements OnInit {
  public onlineUsers: any = [];
  constructor(private onlineUserService: OnlineUsersService) { }

  ngOnInit(): void {
    this.onlineUsers = this.onlineUserService.fetchOnlineUsers();
  }

}
