import { ExtendedModalComponent } from './../extended-modal/extended-modal.component';
import { TestModalComponent } from './../test-modal/test-modal.component';
import { ModalDialogService } from './../+modal-dialog/modal-dialog.service';
import { MainService } from './main.service';
import { Component, OnInit, Inject, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'chat-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  // @ViewChild('container', {read: ViewContainerRef}) containerRef;

  public currentUser: ChatNamespace.IUser;
  public selected: ChatNamespace.IChat;
  public chats: Array<ChatNamespace.IChat>;

  constructor(@Inject(MainService) private service: MainService,
              private modalDialogService: ModalDialogService) {

    // console.log(Reflect.getMetadata('annotations', ExtendedModalComponent)[0]);
              }

  ngOnInit() {
    this.service.getChats().subscribe(chats => this.chats = chats);
    this.currentUser = this.service.currentUser();
  }

  ngAfterViewInit() {
    // this.modalDialogService.initModalComponent(TestModalComponent);
    this.modalDialogService.initModalComponent(ExtendedModalComponent);
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

  openModal() {
    this.modalDialogService
      .open()
      .subscribe(result => console.log('result from controller', result));
  }

}
