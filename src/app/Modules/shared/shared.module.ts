import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  declarations: [
    ProductDetailsComponent,
    CartComponent
  ],
  exports: [
    SharedRoutingModule,
    ProductDetailsComponent,
    CartComponent
  ]
})
export class SharedModule { }
