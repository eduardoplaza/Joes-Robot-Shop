import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'product-detail', component: ProductDetailsComponent },
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
export class SharedRoutingModule { }
