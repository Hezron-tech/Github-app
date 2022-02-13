import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
{path:'profile',component:profileComponent},
{path:'landing',component:LandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
