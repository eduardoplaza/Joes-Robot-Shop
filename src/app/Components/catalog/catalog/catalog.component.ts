import { Component, inject } from '@angular/core';
import { CartService } from '../../../Services/cart/cart.service';
import { IProduct } from 'src/app/Models/product.model';
import { ProductService } from '../../../Services/products/product.service';
import { Router, ActivatedRoute, RouterLinkActive, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../../shared/product-details/product-details.component';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports:[CommonModule, RouterLink, RouterLinkActive, ProductDetailsComponent ]
})

export class CatalogComponent {
  products:  any;
  filter: any;
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
    this.route.params.subscribe((params) => {
    this.filter = params['filter'] ?? '';});

    //  this.route.paramMap.subscribe(
    //     (parmap) => this.filter = parmap.get("filter")?.toString()
    // );
      console.debug("filter: " +this.filter);
  }

  // ngAfterViewInit(): void {
  //   this.getFilterProduct();
  //   console.warn(this.filter);
  // }

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
