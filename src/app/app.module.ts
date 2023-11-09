import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PhonesPageComponent } from './Pages/phones-page/phones-page.component';
import { SliderComponent } from './Components/slider/slider.component';
import { SliderListComponent } from './Components/slider-list/slider-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneCardComponent } from './Components/phone-card/phone-card.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { BackButtonComponent } from './Components/back-button/back-button.component';
import { FormsModule } from '@angular/forms';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartElementComponent } from './Components/cart-element/cart-element.component';
import { CartFinalizationComponent } from './Components/cart-finalization/cart-finalization.component';
import { NotificationModalComponent } from './Components/notification-modal/notification-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    PhonesPageComponent,
    SliderComponent,
    SliderListComponent,
    PhoneCardComponent,
    CategoriesComponent,
    FooterComponent,
    ProductPageComponent,
    BackButtonComponent,
    FavoritePageComponent,
    CartPageComponent,
    CartElementComponent,
    CartFinalizationComponent,
    NotificationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
