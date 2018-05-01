import { NotFoundError } from './../../app/common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../../app/common/app-error';
import { BadRequestError } from '../../app/common/bad-request-error';
import { ToastController } from 'ionic-angular';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: Http, private url:string,private toastCntrl:ToastController) {

  }

  getData(){
     return this.http.get(this.url)
     .map(response=>response.json())
     .catch((error:Response)=>{
       if(error.status === 404)
         {
           console.log("in 404");
         return Observable.throw(new NotFoundError());
         }
       else if(error.status === 400)
         return Observable.throw(new BadRequestError());
       else 
         return Observable.throw(new AppError(error));
     });
  }

  createToast(messageProvided){
    console.log("in create toast")
    let toast = this.toastCntrl.create({
      message: messageProvided,
      duration: 3000,
      position: 'middle'
    });
    return toast;
  }

}
