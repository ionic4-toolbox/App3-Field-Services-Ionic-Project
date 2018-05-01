import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewIncidentsPage } from './new-incidents';

@NgModule({
  declarations: [
    NewIncidentsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewIncidentsPage),
  ],
})
export class NewIncidentsPageModule {}
