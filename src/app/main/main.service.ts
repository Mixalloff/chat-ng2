import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MainService {
  messages: Array<ChatNamespace.IMessage>;

  constructor(private http: Http) {
    this.messages = [
      { id: 111, chatId: 1, time: '13:00', from: 1, text: 'Hi man!' },
      { id: 112, chatId: 1, time: '13:01', from: 1, text: '1234567!' },
      { id: 113, chatId: 1, time: '13:02', from: 777, text: 'Hello!' },
      { id: 114, chatId: 1, time: '13:03', from: 1, text: 'dgdfglnfldsflkjnfdkjn!' },
      { id: 222, chatId: 2, time: '13:00',  from: 1, text: 'Hi man!' },
      { id: 333, chatId: 3, time: '13:00',  from: 1, text: 'Hi man!' },
      { id: 444, chatId: 4, time: '13:00',  from: 1, text: 'Hi man!' },
      { id: 555, chatId: 5, time: '13:00',  from: 1, text: 'Hi man!' }
    ];
  }

  getUsers(num: number): Observable<ChatNamespace.IUser[]> {
    const url = `https://randomuser.me/api/?results=${ num }&inc=name,picture`;
    
    return this.http.get(url)
                    .map(res => {
                      const json = res.json().results;
                      return json.map( data => ({ name: data!.name!.first, surname: data!.name!.last, avatar: data!.picture!.thumbnail }) );
                    });
  }

  getChats(): Observable<ChatNamespace.IChat[]> {
    return new Observable(observer => {
      this.getUsers(10).subscribe(usersData => {
        const chats = [
          {
            id: 1,
            participants: [ Object.assign({ id: 1 }, usersData[0]) ],
            messages: [ { id: 111, chatId: 1, time: '13:00', from: 1, text: 'Hi man!' } ]
          },
          {
            id: 2,
            participants: [ Object.assign({ id: 2 }, usersData[1]) ],
            messages: [ { id: 222, chatId: 2, time: '13:00',  from: 777, text: 'Hi man!' } ]
          },
          {
            id: 3,
            participants: [ Object.assign({ id: 3 }, usersData[2]) ],
            messages: [ { id: 333, chatId: 3, time: '13:00',  from: 3, text: 'Hi man!' } ]
          },
          {
            id: 4,
            participants: [ Object.assign({ id: 4 }, usersData[3]) ],
            messages: [ { id: 444, chatId: 4, time: '13:00',  from: 4, text: 'Hi man!' } ]
          },
          {
            id: 5,
            participants: [ Object.assign({ id: 5 }, usersData[4]) ],
            messages: [ { id: 555, chatId: 5, time: '13:00',  from: 5, text: 'Hi man!' } ]
          },
          {
            id: 6,
            participants: [ Object.assign({ id: 6 }, usersData[5]) ],
            messages: []
          },
          {
            id: 7,
            participants: [ Object.assign({ id: 7 }, usersData[6]) ],
            messages: []
          },
          {
            id: 8,
            participants: [ Object.assign({ id: 8 }, usersData[7]) ],
            messages: []
          },
          {
            id: 9,
            participants: [ Object.assign({ id: 9 }, usersData[8]) ],
            messages: []
          },
          {
            id: 10,
            participants: [ Object.assign({ id: 10 }, usersData[9]) ],
            messages: []
          }
        ];

        observer.next(chats);
      });
    });
  }

  getMessages(chatId): Array<ChatNamespace.IMessage> {
    return this.messages.filter(message => message.chatId === chatId);
  }

  sendMessage(message, chatId) {
    this.messages.push(
      {
        id: Math.random(),
        chatId,
        time: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'} ),
        from: this.currentUser().id, text: message
      }
    );
  }

  currentUser(): ChatNamespace.IUser {
    const avatar = 'https://api.adorable.io/avatars/150/abott@adorable.io.png';

    return { id: 777, name: 'Mikhail', surname: 'Mikhalev', avatar };
  }
}
