import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { Error404Component } from './component/error/error404/error404.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { CatErrorComponent } from './component/error/cat-error/cat-error.component';
import { LoginComponent } from './component/login/login.component';
import { NgxTurnstileModule } from 'ngx-turnstile';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
    HomeComponent,
    AboutComponent,
    CatErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgxTurnstileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

