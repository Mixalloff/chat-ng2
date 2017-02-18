import { MainService } from './main.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'chat-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  public currentId: number;
  public selected: ChatNamespace.IFriend;
  public friends: Array<ChatNamespace.IFriend>;

  constructor(@Inject(MainService) private service: MainService) {}

  ngOnInit() {
    this.friends = this.service.getFriends();
  }

  selectDialog(friend: ChatNamespace.IFriend) {
    console.log(friend)
    this.selected = friend;
  }

}
