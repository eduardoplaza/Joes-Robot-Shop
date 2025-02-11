import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from 'src/app/Models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  readonly apiCartUrl: string = '/api/cart';

  constructor(private http: HttpClient)
  {
    this.http.get<IProduct[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  add(product: IProduct)
  {
    const newCart = [...this.cart.getValue(),product];
    this.cart.next(newCart);
    this.http.post('/api/cart', this.cart).subscribe(()=>{
      console.log('product ${product.name} added to cart');
    });

  }

  getCart() : Observable<IProduct[]>
  {
    return this.cart.asObservable();
  }

  remove(product: IProduct){
    let newCart =this.cart.getValue().filter((i) => i !== product);
    this.cart.next(newCart);
    this.http.post('/api/cart', this.cart).subscribe(()=>{
      console.log('removed ${product.name} from cart');
    });
  }
}
