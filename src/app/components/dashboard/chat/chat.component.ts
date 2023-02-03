import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faWindowClose, faCog, faTimes, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Output() closeChat = new EventEmitter<boolean>();
  faCog = faCog;
  faWindowClose = faWindowClose;
  faTimes = faTimes;
  faUser = faUser;
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

  closeChatCanvas() {
    this.closeChat.emit(false);
  }
}
