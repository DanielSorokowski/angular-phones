import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartPageModule } from './modules/cart-page/cart-page.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PhonesPageModule } from './modules/phones-page/phones-page.module';
import { ProductPageModule } from './modules/product-page/product-page.module';
import { FavoritePageModule } from './modules/favorite-page/favorite-page.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CartPageModule,
    HomePageModule,
    PhonesPageModule,
    ProductPageModule,
    FavoritePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
