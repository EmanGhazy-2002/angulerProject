import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;

}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() products: Product[] = []; 
}