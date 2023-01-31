import { Component, OnInit } from '@angular/core';
import { faComments, faGraduationCap, faCog, faTrophy } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-info-container',
  templateUrl: './user-info-container.component.html',
  styleUrls: ['./user-info-container.component.scss']
})
export class UserInfoContainerComponent implements OnInit {

  constructor() { }
  public faComments = faComments;
  public faGraduationCap = faGraduationCap;
  public faCog = faCog;
  public faTrophy = faTrophy;
  ngOnInit(): void {
  }

}
