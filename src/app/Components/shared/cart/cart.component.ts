import { Component, inject } from '@angular/core';
import { IProduct } from '../../../Models/product.model';
import { CommonModule, CurrencyPipe,  NgIf} from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports:[CommonModule, CurrencyPipe, ProductDetailsComponent, NgIf]
})
export class CartComponent {
  private cart: IProduct[];
  readonly robotPartsImagePath: string;
  private cartSrv : CartService = inject(CartService);

  constructor() {
    this.robotPartsImagePath = '/assets/images/robot-parts/';
    this.cart = [];
  }

  ngOnInit() {
    this.cartSrv.getCart().subscribe(
      (cart) => {this.cart = cart;}
    );
  }

  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      let price = next.units === undefined ? next.price : next.price * next.units;
      return prev + price * discount;
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
