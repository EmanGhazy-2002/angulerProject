import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  product?: Product;
  constructor(private route: ActivatedRoute, private _products: ProductsService) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProductDetails(id);
  }
  getProductDetails(id: string | null): void {
    this._products.getproducts().subscribe({
      next: (res) => {
        this.product = res.find(p => p.id === Number(id));
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
      },
      complete: () => {
        console.log('Product details fetching completed');
      }
    });
  }


}