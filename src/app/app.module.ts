import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarModule } from './components/topbar/topbar.module';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterModule } from './components/footer/footer.module';
import { HomeComponent } from './components/home/home.component';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { CategoryCardComponent } from './components/home/category-card/category-card.component';
import { NewProductsComponent } from './components/home/new-products/new-products.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    HotDealsComponent,
    CategoriesComponent,
    LaptopsComponent,
    SmartphonesComponent,
    CamerasComponent,
    AccessoriesComponent,
    CategoryCardComponent,
    NewProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopbarModule,
    FooterModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
