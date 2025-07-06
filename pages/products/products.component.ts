import { Component, inject } from '@angular/core';
import { ProductItemComponent } from '../../src/app/product-item/product-item.component';
import { ProductsService } from '../../src/app/products.service';
import { Product } from '../../src/app/product';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService]
})
export class ProductsComponent {
  products: Product[] = []

  _ProductsService = inject(ProductsService)

  constructor() {
    this.products = this._ProductsService.Products

  }
}
