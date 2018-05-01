import { NotFoundError } from './../../app/common/not-found-error';
import { BadRequestError } from './../../app/common/bad-request-error';
import { AppError } from './../../app/common/app-error';
import { AppServiceProvider } from './../../providers/app-service/app-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncidentInterface } from '../../components/single-incident/single-incident';

@IonicPage()
@Component({
  selector: 'page-new-incidents',
  templateUrl: 'new-incidents.html',
})
export class NewIncidentsPage {

  incidents:IncidentInterface[];
  showView:string='Error';  //this variable shows the no incident exist page or shows nothig if value sets to "Error"
  previousClicked:any=null;  //stores the previously clicked incident reference
  showLoader:boolean=true;   //shows the loader
  constructor(public navCtrl: NavController, public navParams: NavParams,
   private appService :AppServiceProvider) {
  }

  ionViewDidLoad() {
    this.getIncidents();
  }

  /**if to shrink icon clicked**/
  incidentShrinked(event){
    console.log("in new incidents incident shrinked");
    this.previousClicked = null;
  }

  /**if any inicident  component clicked the component needs to be expanded**/
  incidentExpand(event){
    console.log("in new incidents incident expanded");
    console.log("event",event);
    /*if first time clicked or any other incident is shrinked */
    if(this.previousClicked === null){
      this.previousClicked =event;
    }
    /*if any other incident is clicked when another is still opened that one needs to be shrinked 
    and new one needs to be expanded */
    else{
      this.previousClicked.expand= false;
      this.previousClicked =event;
    }
    console.log("previousClicked",event);
  }
/**getting incident from the service and storing it to incident array **/
  getIncidents(){
    this.appService.getData()
    .subscribe(
         returnIncidents=>{
            this.incidents = returnIncidents['incident'];
            console.log("incidents....",this.incidents);
            /**checks wheather incident array is null to show the no incident exist part */
            this.showView=(this.incidents.length>0)?'Yes':'No';
            console.log("this.showview",this.showView);
            /**once loading is complete the loader needs to be stopped */
            this.showLoader = !this.showLoader;
         },
         (error:AppError) =>{
          this.showLoader = !this.showLoader;
          this.showView='Error';
          /**if error occurs a toast notification is displayed*/
            if(error instanceof BadRequestError)
              this.appService.createToast("400 Bad Request..!!").present();
            else if(error instanceof NotFoundError)
              this.appService.createToast("404 Not Found..!!").present();
            else throw  error;
            }
    )
  }

}
