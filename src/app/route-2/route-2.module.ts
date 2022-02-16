import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route-2-routing.module';
import { SecondRouteComponent } from './second-route/second-route.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { TextSizePipe } from './pipe/text-size.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    SecondRouteComponent,
    GridViewComponent,
    TextSizePipe
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    TooltipModule
  ]
})
export class Route2Module { }
