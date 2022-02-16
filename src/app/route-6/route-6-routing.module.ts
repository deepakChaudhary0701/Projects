import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixthRouteComponent } from './sixth-route/sixth-route.component';

const routes: Routes = [
  { path: 'sixthRoute', component: SixthRouteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route6RoutingModule { }
