import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // template: '<h2>Bruno Teste</h2>'
    templateUrl: './user.component.html'
    // stylesUrl: ['path']
})

export class UserComponent {
    firstName: string = "Bruno";
    lastName: string = 'Dev09';
    age: number = 22;
    address;

    foo: any;
    hasJob: boolean = true;
    numberArr: number[] = [1,2,3];
    strArr: string[] = ['hey', 'guys'];
    mixedArrImportant: any[] = ['hey', 2, true];
    myTuple: [string, number, boolean];
    unusable: void;
    und: undefined;
    n: null;

    constructor() {
        this.age++;
        this.address = {
            street: "whatever st"
        }
    }

    showAge() {
        return this.age;
    }

    sayStr(str) {
        console.log(`Hey ${str}`);
        console.log(`Hey ${this.firstName}`);
    }

    basicArit(num1:number, num2:number): number {
        return num1 + num2;
    }
}