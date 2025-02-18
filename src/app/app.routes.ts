import { Routes } from '@angular/router';import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop" },
  { path: '', loadChildren: () => import('./Components/catalog/catalog.routes').then(m=> m.routes) },
  { path: '', loadChildren: () => import('./Components/shared/shared.routes').then(m => m.routes) },
  //{ path: '', loadChildren: () => import('./Components/squad/squad.routes').then(m => m.routes) },
  { path: '', redirectTo: "/home", pathMatch: "full" },

];
