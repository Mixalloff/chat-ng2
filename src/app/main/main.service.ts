import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  constructor() {}

  getFriends(): Array<ChatNamespace.IFriend> {
    const avatar = './assets/images/avatar.jpg';

    return [
      { id: 1, name: 'Ivan', surname: 'Ivanov', avatar, messages: [ { from: 1, text: 'Hi man!' } ] },
      { id: 2, name: 'Petr', surname: 'Petrov', avatar, messages: [ { from: 2, text: 'Hi man!' } ]  },
      { id: 3, name: 'Mikhail', surname: 'Semenov', avatar, messages: [ { from: 3, text: 'Hi man!' } ]  },
      { id: 4, name: 'Alexei', surname: 'Legkov', avatar, messages: [ { from: 4, text: 'Hi man!' } ]  },
      { id: 5, name: 'Denis', surname: 'Maksimov', avatar, messages: [ { from: 5, text: 'Hi man!' } ]  }
    ];
  }
}
