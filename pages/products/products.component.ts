import { Component, inject } from '@angular/core';
import { ProductItemComponent } from '../../src/app/product-item/product-item.component';
import { ProductsService } from '../../src/app/products.service';
import { Product } from '../../src/app/product';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService]
})
export class ProductsComponent {
  readonly _products = inject(ProductsService);
  products!: Product[];
  productSub!: Subscription;

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productSub = this._products.getproducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
      complete: () => {
        console.log('Product fetching completed');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
}