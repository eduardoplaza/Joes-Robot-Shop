import { Component } from '@angular/core';
import {IProduct} from '../../../../Models/product.model'

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private cart: IProduct[];
  readonly robotPartsImagePath: string;

  constructor() {
    this.robotPartsImagePath = '/assets/images/robot-parts/';
    this.cart = [];
  }

  ngOnInit() { }


  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  removeFromCart(product: IProduct) {
    this.cart.filter(p => p.id !== product.id);
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return this.robotPartsImagePath + product.imageName;
  }
}
