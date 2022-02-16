import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthRouteComponent } from './fourth-route/fourth-route.component';

const routes: Routes = [
  { path: 'fourthRoute', component: FourthRouteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route4RoutingModule { }
