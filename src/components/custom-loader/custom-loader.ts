import { Component } from '@angular/core';

/**
 * Generated class for the CustomLoaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-loader',
  templateUrl: 'custom-loader.html'
})
export class CustomLoaderComponent {

  text: string;

  constructor() {
    console.log('Hello CustomLoaderComponent Component');
    this.text = 'Hello World';
  }

}
