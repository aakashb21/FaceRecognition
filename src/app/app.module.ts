import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './body/login-form/login-form.component';

import { appRoutes } from './app.routes';

import {WebcamModule} from './modules/webcam/webcam.module';

import { NgxSpinnerModule } from "ngx-spinner";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserOneProfileComponent } from './user-profiles/user-one-profile/user-one-profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserOneProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [UserOneProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
