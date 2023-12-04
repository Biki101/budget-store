import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'hotdeals',
    component: HotDealsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'laptops',
    component: LaptopsComponent,
  },
  {
    path: 'smartphones',
    component: SmartphonesComponent,
  },
  {
    path: 'cameras',
    component: CamerasComponent,
  },
  {
    path: 'accessories',
    component: AccessoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
