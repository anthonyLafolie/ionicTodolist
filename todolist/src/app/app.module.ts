import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCxhp8pPPRNh853h6jjwdn1miWywOuPfmU",
	authDomain: "todolist-b2096.firebaseapp.com",
	databaseURL: "https://todolist-b2096-default-rtdb.firebaseio.com",
	projectId: "todolist-b2096",
	storageBucket: "todolist-b2096.appspot.com",
	messagingSenderId: "119862713412",
	appId: "1:119862713412:web:eb31a15408da95f1dff011",
	measurementId: "G-TG19HDW3LT"
  };


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

