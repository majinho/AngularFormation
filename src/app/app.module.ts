import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import {AboutService} from '../services/about.service';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent } from './gallery/gallery.component';
import {HttpModule} from '@angular/http';
import { RestserviceComponent } from './restservice/restservice.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const appRootes:Routes =[
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'banque',component:RestserviceComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    RestserviceComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRootes),HttpModule,HttpClientModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
