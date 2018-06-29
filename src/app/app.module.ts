import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHome } from './home.component';
import{ AppAbout } from './about.component';
import{ AppOffers } from './offers.component';
import{ AppContact } from './contact.component';
import { RouterModule, Routes , RouterLinkActive} from '@angular/router';
import { AppIphonex } from './items/iphonex.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path:'' , redirectTo:'/Home' , pathMatch: 'full'},
  { path: 'Home', component: AppHome },
  { path: 'About', component: AppAbout },
  { path: 'Offers', component: AppOffers },
  { path: 'Contact', component: AppContact }
 
];
const appRoutes1: Routes = [
  {path:'' , redirectTo:'/iphonex' , pathMatch: 'full'},
  { path: 'iphonex', component: AppIphonex },
  { path: 'samsungs9', component: AppAbout },
  { path: 'googlepix2', component: AppOffers },
  { path: 'applelap', component: AppOffers },
  { path: 'acerlap', component: AppOffers },
  { path: 'lenovolap', component: AppOffers },
  { path: 'canoncam', component: AppOffers },
  { path: 'nikoncam', component: AppContact },
  { path: 'sonycam', component: AppContact }
];


@NgModule({
  declarations: [
    AppComponent,AppHome, AppAbout, AppOffers, AppContact, AppIphonex
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
