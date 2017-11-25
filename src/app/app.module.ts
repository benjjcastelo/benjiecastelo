import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TimerComponent } from './timer/timer.component';
import { StopWatchService } from './timer/timer.service';
import { AppRoutingModule }     from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StopWatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
