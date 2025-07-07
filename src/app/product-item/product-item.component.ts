import { Component, input, Input } from '@angular/core';
import { Product } from '../product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  Item = input<Product>();
  constructor() { }
}
