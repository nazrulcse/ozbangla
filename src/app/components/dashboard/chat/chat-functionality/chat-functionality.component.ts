import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faWindowClose, faCog, faTimes, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-functionality',
  templateUrl: './chat-functionality.component.html',
  styleUrls: ['./chat-functionality.component.scss']
})
export class ChatFunctionalityComponent implements OnInit {
  @Output() closeChat = new EventEmitter<boolean>();

  constructor() { }

  faCog = faCog;
  faTimes = faTimes;
  faUser = faUser;
  ngOnInit(): void {
  }

  closeChatCanvas() {
    this.closeChat.emit(false);
  }
  
}
