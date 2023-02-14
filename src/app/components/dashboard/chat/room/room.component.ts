import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor() { }
  @Input() user: any;
  @Output() backToChatEvent = new EventEmitter<boolean>();
  faPaperPlane = faPaperPlane;
  ngOnInit(): void {
  }

  backToChat() {
    this.backToChatEvent.emit(false);
  }
}
