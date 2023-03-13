import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let url = window.location.pathname;
    let admin = this.authService.getActiveUser().isAdmin;

    if ((url == '/admin')  && admin ) {
      console.log(url, admin)
      this.router.navigate([url]);
    } else {
      console.log(url, admin)
      this.router.navigate(['404']);
    }
    
  }
}
