import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route-6-routing.module';
import { SixthRouteComponent } from './sixth-route/sixth-route.component';



@NgModule({
  declarations: [
    SixthRouteComponent
  ],
  imports: [
    CommonModule,
    Route6RoutingModule
  ]
})
export class Route6Module { }
