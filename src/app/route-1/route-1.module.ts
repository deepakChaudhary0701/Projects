import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route1RoutingModule } from './route-1-routing.module';
import { FirstRouteComponent } from './first-route/first-route.component';


@NgModule({
  declarations: [
    FirstRouteComponent,
  ],
  imports: [
    CommonModule,
    Route1RoutingModule,
  ]
})
export class Route1Module { }
