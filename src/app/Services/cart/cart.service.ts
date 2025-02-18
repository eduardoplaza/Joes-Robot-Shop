import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
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
    var newCart = null;
    const newProduct = this.find(product);
    if(newProduct !== undefined && newProduct !== null)
    {
      newCart = this.cart.getValue().filter( p => p.id !== product.id);
      newProduct.units =  newProduct.units === undefined ? 2 : ++newProduct.units;
      this.cart.next([...newCart,newProduct]);
    }
    else{
      this.cart.next([...this.cart.getValue(),product]);
    }
    this.http.post<IProduct[]>('/api/cart', this.cart)
    .pipe( map( (cart: IProduct[]) => {
      this.cart.next(cart);
      return cart;
    }));
  }

  getCart() : Observable<IProduct[]>
  {
    return this.cart.asObservable();
  }

  remove(product: IProduct){
    let newCart =this.cart.getValue().filter((i) => i !== product);

    this.cart.next(newCart);
    this.http.post<IProduct[]>('/api/cart', this.cart)
    .pipe( map( (cart: IProduct[]) => {
      this.cart.next(cart);
      return cart;
    }));
  }

  find(product: IProduct){
    if(product !== null)
    {
      var cartFind =this.cart.getValue().filter((i) => i.id === product.id);
      return cartFind[0];
    }
    return null;
  }
}
