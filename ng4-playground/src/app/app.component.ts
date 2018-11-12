import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey guys!</h1>
  <p>{{ myObject.location }}</p>
  <ul>
    <li *ngFor="let arr of myArr">{{ arr }}</li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  }

  myArr = ['him', 'hers', 'yours'];
}
