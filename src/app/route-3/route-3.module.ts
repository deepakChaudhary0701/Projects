import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route-3-routing.module';
import { ThirdRouteComponent } from './third-route/third-route.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { StartPauseComponent } from './start-pause/start-pause.component';
import { TimeStampComponent } from './time-stamp/time-stamp.component';
import { ClickCountComponent } from './click-count/click-count.component';


@NgModule({
  declarations: [
    ThirdRouteComponent,
    CountdownTimerComponent,
    StartPauseComponent,
    TimeStampComponent,
    ClickCountComponent
  ],
  imports: [
    CommonModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
