import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { SearchComponent } from './search/search.component';

//  export const routes: Routes = [
//    {
//      path: '',
//      children: [
//        { path: 'catalog', component: CatalogComponent },
//        //{ path: 'catalog/:filter', component: CatalogComponent },
//        { path: 'search', component: SearchComponent },
//      ]
//    }
//  ];

export const routes: Routes = [
      { path: 'catalog', component: CatalogComponent },
      //{ path: 'catalog/:filter', component: CatalogComponent },
      { path: 'search', component: SearchComponent },
];
