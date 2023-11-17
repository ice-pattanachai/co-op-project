import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Error404Component } from './component/error/error404/error404.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { CatErrorComponent } from './component/error/cat-error/cat-error.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo:'home' , pathMatch: 'full' },
  { path: 'home' , component : HomeComponent },
  { path: 'about' , component : AboutComponent },
  { path: 'login' , component : LoginComponent },
  { path: 'bongo-cat' , component : CatErrorComponent},
  { path: '**', component : Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
