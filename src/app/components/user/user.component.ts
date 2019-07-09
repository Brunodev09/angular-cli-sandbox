import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    // template: '<h2>Bruno Teste</h2>'
    templateUrl: './user.component.html'
    // stylesUrl: ['path']
})

export class UserComponent implements OnInit {
    user: User;

    constructor() {
    }
    
    ngOnInit() {
        this.user = {
            firstName: 'Bruno',
            lastName: 'Dev09',
            age: 22,
            address: {
                street: "wtv",
                city: 'SP'
            }
        }
    }
}

