import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public currentActiveUser: any;
  public isAdmin: any;
  ngOnInit(): void {
    this.currentActiveUser = this.authService.getActiveUser();
    this.isAdmin = this.currentActiveUser.isAdmin;
    console.log(this.isAdmin)
  }

}
