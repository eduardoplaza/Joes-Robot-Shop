import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { SearchComponent } from './Components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductDetailsComponent } from '../shared/Components/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule,
  ],
  declarations: [
    CatalogComponent,
    SearchComponent
  ],
  exports:[
    CatalogRoutingModule,
    CatalogComponent,
    SearchComponent
  ]
})
export class CatalogModule { }
