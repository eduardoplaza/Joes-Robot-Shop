import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogModule} from './Modules/catalog/catalog.module';
import { SharedModule } from './Modules/shared/shared.module';
import { SquadModule } from './Modules/squad/squad.module';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop" },
  { path: 'catalog', loadChildren: () => import('./Modules/catalog/catalog.module').then(m=> m.CatalogModule) },
  { path: 'search', loadChildren: () => import('./Modules/catalog/catalog.module').then(m=> m.CatalogModule) },
  { path: 'cart', loadChildren: () => import('./Modules/shared/shared.module').then(m => m.SharedModule) },
  { path: 'squad', loadChildren: () => import('./Modules/squad/squad.module').then(m => m.SquadModule) },
  { path: '', redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CatalogModule,
    SharedModule,
    CommonModule,
    SquadModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
    SharedModule,
    CatalogModule,
  ]
})
export class AppRoutingModule { }
