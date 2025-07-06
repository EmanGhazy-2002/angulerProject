import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CategoryComponent } from "../category/category.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from '../../../pages/products/products.component';



@Component({
  selector: 'app-home',
  imports: [NavBarComponent, CategoryComponent, ProductListComponent, FooterComponent, CarouselModule, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
