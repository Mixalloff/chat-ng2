import { Component, OnInit } from '@angular/core';


const avatar = './assets/images/avatar.jpg';

@Component({
  selector: 'chat-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public currentId = 111;
  
  public friends = [
      { id: 1, name: 'Ivan', surname: 'Ivanov', avatar, messages: [ { from: 1, text: 'Hi man!' } ] },
      { id: 2, name: 'Petr', surname: 'Petrov', avatar, messages: [ { from: 2, text: 'Hi man!' } ]  },
      { id: 3, name: 'Mikhail', surname: 'Semenov', avatar, messages: [ { from: 3, text: 'Hi man!' } ]  },
      { id: 4, name: 'Alexei', surname: 'Legkov', avatar, messages: [ { from: 4, text: 'Hi man!' } ]  },
      { id: 5, name: 'Denis', surname: 'Maksimov', avatar, messages: [ { from: 5, text: 'Hi man!' } ]  }
    ];

  constructor() { }

  ngOnInit() {
    
  }

}
