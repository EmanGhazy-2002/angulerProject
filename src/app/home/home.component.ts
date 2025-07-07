import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductListComponent } from '../product-list/product-list.component';
import { DetailsComponent } from '../details/details.component';
import { HomeProductComponent } from "../home-product/home-product.component";



@Component({
  selector: 'app-home',
  imports: [CategoryComponent, ProductListComponent, CarouselModule, DetailsComponent, HomeProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  @ViewChild('lazyContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('trigger', { static: true }) trigger!: ElementRef;

  observer!: IntersectionObserver;
  loaded = false;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.loaded) {
        this.loadLazyComponent();
        this.observer.disconnect();
      }
    });

    this.observer.observe(this.trigger.nativeElement);
  }


  async loadLazyComponent() {
    const { HomeProductComponent } = await import("../home-product/home-product.component");
    this.container.createComponent(HomeProductComponent);
    this.loaded = true;
  }
}