import { Injectable } from '@angular/core';
import { ServiceProvider } from '../service/service';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the AppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppServiceProvider extends ServiceProvider {

  constructor(public http: Http, toastCtrl: ToastController) {
   super(http,"../../assets/incident.json",toastCtrl);
  }

  
  
}
