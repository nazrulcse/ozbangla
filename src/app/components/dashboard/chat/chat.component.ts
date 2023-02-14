import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faWindowClose,
  faCog,
  faTimes,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { OnlineUsersService } from 'src/app/services/online-users.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Output() closeChat = new EventEmitter<boolean>();
  faCog = faCog;
  faWindowClose = faWindowClose;
  faTimes = faTimes;
  faUser = faUser;
  faSearch = faSearch;
  chatUsers: any = [];
  showRoom: boolean = false;
  user: any = {};
  constructor(private chatService: OnlineUsersService) {}

  ngOnInit(): void {
    this.chatUsers = this.chatService.fetchOnlineUsers();
  }

  closeChatCanvas() {
    this.closeChat.emit(false);
  }

  startMessage(user: any) {
    this.showRoom = true;
    this.user = user;
  }

  backToChat(value: any) {
    this.showRoom = value;
  }
}
