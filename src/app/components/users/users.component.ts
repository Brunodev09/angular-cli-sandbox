import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

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
        }
      },
      {
        firstName: 'Dino',
        lastName: 'Nino',
        age: 2,
        address: {
          street: "wtv",
          city: 'SP'
        }
      },
      {
        firstName: 'Maysa',
        lastName: 'Salton',
        age: 23,
        address: {
          street: "wtv",
          city: 'SP'
        }
      }
    ];

    this.addUser({
      firstName: 'Added',
      lastName: 'UserSuper',
      age: 223133,
      address: {
        street: "wtv",
        city: 'Mars'
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
