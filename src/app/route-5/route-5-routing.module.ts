import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthRouteComponent } from './fifth-route/fifth-route.component';

const routes: Routes = [
  { path: 'fifthRoute', component: FifthRouteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route5RoutingModule { }
