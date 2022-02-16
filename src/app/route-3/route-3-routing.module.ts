import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdRouteComponent } from './third-route/third-route.component';

const routes: Routes = [
  { path: 'thirdRoute', component: ThirdRouteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route3RoutingModule { }
