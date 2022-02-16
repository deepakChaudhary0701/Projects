import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route-4-routing.module';
import { FourthRouteComponent } from './fourth-route/fourth-route.component';
import { ClickCountFourComponent } from './click-count-four/click-count-four.component';
import { CountdownTimerFourComponent } from './countdown-timer-four/countdown-timer-four.component';
import { StartPauseFourComponent } from './start-pause-four/start-pause-four.component';
import { TimeStampFourComponent } from './time-stamp-four/time-stamp-four.component';


@NgModule({
  declarations: [
    FourthRouteComponent,
    ClickCountFourComponent,
    CountdownTimerFourComponent,
    StartPauseFourComponent,
    TimeStampFourComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule
  ]
})
export class Route4Module { }
