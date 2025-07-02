import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CategoryComponent } from "../category/category.component";
import { Product, ProductComponent } from "../product/product.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';



@Component({
  selector: 'app-home',
  imports: [NavBarComponent, CategoryComponent, ProductComponent, FooterComponent,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      onSale: undefined
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      onSale: undefined
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      onSale: undefined
    }
  ];

}
