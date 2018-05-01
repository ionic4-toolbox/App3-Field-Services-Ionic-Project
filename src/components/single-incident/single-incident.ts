import { Component, Input, Output,EventEmitter, HostListener  } from '@angular/core';

/**
 * Generated class for the SingleIncidentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'single-incident',
  templateUrl: 'single-incident.html'
})
export class SingleIncidentComponent {

  @Input("incidentAttribute") incident:IncidentInterface;
  @Output("onIncidentExpand") clickIncident = new EventEmitter<any>();
  @Output("onIncidentShrinked") shrinkIncident = new EventEmitter<any>();
  expand:boolean=false;
  constructor() {
  }
  onExpand(event){
    console.log("on Expand ....");
    this.expand = !this.expand;
    this.clickIncident.emit(this);
  }
  //@HostListener('blur')
  onShrink(){
    console.log("on Shrink....");
    this.expand = !this.expand;
    this.shrinkIncident.emit(this);
  }

}

export interface IncidentInterface{
  incidentId:number,
  incidentName : string,
  ticketStatus : string,
  machineStatus : string,
  reason : string,
  criticality : string
}

