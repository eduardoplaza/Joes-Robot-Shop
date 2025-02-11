import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'catalog', component: CatalogComponent },
      { path: 'catalog/:filter', component: CatalogComponent },
      { path: 'search', component: SearchComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CatalogRoutingModule { }
