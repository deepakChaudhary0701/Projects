import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstRouteComponent } from './first-route/first-route.component';

const routes: Routes = [
  { path: 'firstRoute', component: FirstRouteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route1RoutingModule { }
