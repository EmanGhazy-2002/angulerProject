import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ProductsComponent } from '../../pages/products/products.component';

export const routes: Routes = [


    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "products", component: ProductsComponent },
    { path: "**", component: NotFoundComponent }


];
