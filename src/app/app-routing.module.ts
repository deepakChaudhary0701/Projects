import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
 { path: 'dashboard/Route_1', loadChildren: () => import('./route-1/route-1.module').then( m => m.Route1Module)},
 { path: 'dashboard/Route_2', loadChildren: () => import('./route-2/route-2.module').then( m => m.Route2Module)},
 { path: 'dashboard/Route_3', loadChildren: () => import('./route-3/route-3.module').then( m => m.Route3Module)},
 { path: 'dashboard/Route_4', loadChildren: () => import('./route-4/route-4.module').then( m => m.Route4Module)},
 { path: 'dashboard/Route_5', loadChildren: () => import('./route-5/route-5.module').then( m => m.Route5Module)},
 { path: 'dashboard/Route_6', loadChildren: () => import('./route-6/route-6.module').then( m => m.Route6Module)},
 { path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
