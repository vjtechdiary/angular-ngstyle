import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // An array is created with name courseArray
  courseArray = [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    }
  ];
  // An array is created with name personArray
  personArray = [
    {
      name: 'Merry',
      country: 'India',
    },
    {
      name: 'John',
      country: 'USA',
    }
  ];
  constructor() { }
  // A function getColor, which is returning some color value based on the conditions
  getColor(country) {
    switch (country) {
      case 'India':
        return 'red';
      case 'USA':
        return 'blue';
    }
  }
}