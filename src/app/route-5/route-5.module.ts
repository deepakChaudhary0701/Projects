import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route-5-routing.module';
import { FifthRouteComponent } from './fifth-route/fifth-route.component';


@NgModule({
  declarations: [
    FifthRouteComponent
  ],
  imports: [
    CommonModule,
    Route5RoutingModule
  ]
})
export class Route5Module { }
