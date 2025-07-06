import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  providers: [ProductsService],
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(private _productsService: ProductsService) {
    this.products = this._productsService.Products.slice(0, 3);
  }
}