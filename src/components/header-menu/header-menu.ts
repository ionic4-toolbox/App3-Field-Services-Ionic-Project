import { Component } from '@angular/core';
import { App, Nav, MenuController } from 'ionic-angular';

/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  text: string;

constructor(public menuCtrl: MenuController, public app: App) {
    console.log('Hello HeaderMenuComponent Component');
    this.text = 'Hello World';
  }

}


