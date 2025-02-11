import { Component, inject } from '@angular/core';
import { CartService } from '../../../../Services/cart/cart.service';
import { IProduct } from 'src/app/Models/product.model';
import { ProductService } from '../../../../Services/products/product.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products:  any;
  filter: string = '';
  product: IProduct[];
  private cartSrv : CartService = inject(CartService);
  private productSrv : ProductService = inject(ProductService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor(){
    this.product = [];
  }

  ngOnInit(): void {
    this.productSrv.getProducts().subscribe(
      (products) => {this.products = products;}
    );
    this.filter = this.route.snapshot.params['filter'];
  }

  ngAfterViewInit(): void {
    this.getFilterProduct();
    console.warn(this.filter);
  }

  addToCart(product: IProduct)
  {
    this.cartSrv.add(product);
    this.router.navigate(["/cart"]);
  }

  getDiscountedClasses(product: IProduct)
  {
    if(product.discount > 0)
      return ['strikethrough'];
    else
      return '';
  }

  getFilterProduct()
  {
    return this.filter === ''  ?
       this.products :
      this.products.filter((product: any) => product.category === this.filter);
  }
}
