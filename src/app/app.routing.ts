import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerComponent }   from './timer/timer.component';
import { LandingPageComponent }      from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'timer', component: TimerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}