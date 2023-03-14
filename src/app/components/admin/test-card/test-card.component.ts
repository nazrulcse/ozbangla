import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { boolean } from 'joi';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {

  constructor(private router: Router) { }
  showButton: any;
  ngOnInit(): void {

    if(this.router.url === '/admin/manage-enroll') {
      this.showButton = true;
    }
    else {
      this.showButton = false;
    }
  }
}
