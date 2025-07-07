import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-home-product',
  imports: [ProductItemComponent],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.scss'
})
export class HomeProductComponent {
  readonly _products = inject(ProductsService)
  products!: Product[];
  private productSub!: Subscription;


  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productSub = this._products.getproducts().subscribe({
      next: (res => {
        this.products = res;
      }),
      error: (err => {
        console.error('Error fetching products:', err);
      }),
      complete: () => {
        console.log('Product fetching completed');
      }
    })
  }
  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
}