import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let url = window.location.pathname;
    let admin = this.authService.getActiveUser().isAdmin;
    console.log(url, admin);

    if (url == '/admin/test' && admin) {
      this.router.navigate(['admin/test']);
    } else {
      this.router.navigate(['404']);
    }
  }
}
