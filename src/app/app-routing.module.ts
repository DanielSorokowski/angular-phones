import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PhonesPageComponent } from './Pages/phones-page/phones-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'phones', component: PhonesPageComponent },
  { path: 'products/:id', component: ProductPageComponent},
  { path: 'favorites', component: FavoritePageComponent},
  { path: 'cart', component: CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
