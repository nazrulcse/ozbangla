import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineUsersService {

  constructor() { }
  fetchOnlineUsers () {
    return [
      {
        id: 1,
        name: 'Sifat Hossain Rabbi',
        img: 'https://i.pinimg.com/736x/14/ac/cf/14accf0ae870b126b5cffdc687d805e7.jpg'
      },
      {
        id: 2,
        name: 'Iqbal Ahmed Emon',
        img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
      },
      {
        id: 3,
        name: 'Saiful Islam Sajon',
        img: '../../assets/images/man.png'
      }
    ]
  }
}
