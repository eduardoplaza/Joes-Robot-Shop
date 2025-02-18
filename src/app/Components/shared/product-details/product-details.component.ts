import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../Models/product.model';
import { CommonModule, CurrencyPipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone:true,
  imports:[CommonModule, NgIf, NgClass, NgStyle, CurrencyPipe, RouterLink, RouterLinkActive],
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

  getPrice(product:IProduct)
  {
    if(product.units === undefined)
    {
       return product.price;
    }
    else
    {
      return product.price * product.units;
    }
  }

  getPriceWithDiscount (product:IProduct)
  {
    if(product.units === undefined)
    {
       return product.price * (1 - product.discount);
    }
    else
    {
      return (product.price * product.units)  * (1 - product.discount);
    }
  }

  }

