import { MainService } from './main.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'chat-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  public currentUser: ChatNamespace.IUser;
  public selected: ChatNamespace.IChat;
  public chats: Array<ChatNamespace.IChat>;

  constructor(@Inject(MainService) private service: MainService) {}

  ngOnInit() {
    this.service.getChats().subscribe(chats => this.chats = chats);
    this.currentUser = this.service.currentUser();
  }

  selectDialog(chat: ChatNamespace.IChat) {
    this.selected = chat;
  }

  getChatName(chat: ChatNamespace.IChat) {
    if (!chat) {
      return '';
    }

    const opponent = chat!.participants[0];

    return `${ opponent!.surname } ${ opponent!.name }`;
  }

  getChatAvatar(chat: ChatNamespace.IChat) {
    return chat!.participants[0]!.avatar;
  }

  getMessages(chat: ChatNamespace.IChat): Array<ChatNamespace.IMessage> {
    return chat ? this.service.getMessages(chat!.id) : [];
  }

  sendMessage(message): void {
    if (!this.selected || !message) {
      return;
    }

    this.service.sendMessage(message, this.selected.id);
  }

}
