import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../Models/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  readonly robotPartsImagePath: string;
  @Input() product! : IProduct;
  cart: IProduct[];
  @Output() buy = new EventEmitter();

   constructor(){
        this.robotPartsImagePath = '/assets/images/robot-parts/';
        this.cart = [];
   }

   getImageUrl(product: IProduct)
   {
     if(!product) return '';
     return  this.robotPartsImagePath  + product.imageName;
   }

   buyButtonClicked(product: IProduct)
  {
    this.buy.emit(product);
    console.log('product ${product.name} added to cart')
  }

  }

