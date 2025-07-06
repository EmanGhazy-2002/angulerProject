import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { category } from '../category';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  Products :category[] = [
     {
       id: 1,
       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
       price: 109.95,
       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
     },
     {
       id: 2,
       title: "Mens Casual Premium Slim Fit T-Shirts ",
       price: 22.3,
       image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
     },
     {
       id: 3,
       title: "Mens Cotton Jacket",
       price: 55.99,
       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
     }
   ];
}