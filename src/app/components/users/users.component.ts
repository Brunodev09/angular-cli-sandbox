import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  enabled: boolean = true;

  currentStyles = {};

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Bruno',
        lastName: 'Dev09',
        age: 22,
        address: {
          street: "wtv",
          city: 'SP'
        },
        image: "https://google.com",
        isActive: true,
        balance: 220,
        registered: new Date(),
        hide: false
      },
      {
        firstName: 'Dino',
        lastName: 'Nino',
        age: 2,
        address: {
          street: "wtv",
          city: 'SP'
        },
        image: "https://google.com",
        isActive: false,
        balance: 100,
        registered: new Date(),
        hide: false
      },
      {
        firstName: 'Maysa',
        lastName: 'Salton',
        age: 23,
        address: {
          street: "wtv",
          city: 'SP'
        },
        image: "https://google.com",
        balance: 300,
        registered: new Date(),
        hide: false
      }
    ];

    this.addUser({
      firstName: 'Added',
      lastName: 'UserSuper',
      age: 223133,
      address: {
        street: "wtv",
        city: 'Mars'
      },
      balance: 500,
      registered: new Date(),
      hide: false
    });

    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '10px'
    }
  }

  fireEvent(evt, user) {
    console.log(evt, user);
    user.hide = !user.hide;
  }

}
