import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'product-detail', component: ProductDetailsComponent },
    ]
  }
];
