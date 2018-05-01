import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewIncidentsPage } from '../new-incidents/new-incidents';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl : NavController) {

  }

  goToNewIncidents(){

  //  this.navCtrl.push(NewIncidentsPage,{'courseId':courseId}); 
    this.navCtrl.push(NewIncidentsPage); 
  }


}
