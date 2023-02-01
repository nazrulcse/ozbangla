import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineUsersService {

  constructor() { }
  fetchOnlineUsers () {
    return [
      {
        name: 'Saiful Islam Sajon',
        img: '../../assets/images/man.png'
      },
      {
        name: 'Saiful Islam Sajon',
        img: '../../assets/images/smile-avater.png'
      },
      {
        name: 'Saiful Islam Sajon',
        img: '../../assets/images/man.png'
      }
    ]
  }
}
