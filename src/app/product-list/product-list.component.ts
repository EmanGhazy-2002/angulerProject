import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  providers: [ProductsService],
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  readonly _products = inject(ProductsService)
  products!: Product[];
  productSub!: Subscription


  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productSub = this._products.getproducts().subscribe({
      next: (res => {
        this.products = res.filter(p => p.category === "men's clothing");
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