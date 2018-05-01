import { NgModule, ErrorHandler, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewIncidentsPage } from '../pages/new-incidents/new-incidents';
import { ProfilePage } from '../pages/profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule,Http } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceProvider } from '../providers/service/service';
import { AppServiceProvider } from '../providers/app-service/app-service';
import { SingleIncidentComponent } from '../components/single-incident/single-incident';
import { CustomLoaderComponent } from '../components/custom-loader/custom-loader';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    NewIncidentsPage,
    ProfilePage,
    SingleIncidentComponent,
    CustomLoaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
       HttpModule,
       IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    TabsPage,
    NewIncidentsPage,
    ProfilePage,
    SingleIncidentComponent,
    CustomLoaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    AppServiceProvider
    
  ]
})
export class AppModule {
}
