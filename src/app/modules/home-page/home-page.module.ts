import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from 'src/app/modules/home-page/Components/slider/slider.component';
import { CategoriesComponent } from 'src/app/modules/home-page/Components/categories/categories.component';
import { HomePageComponent } from './home-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
})
export class HomePageModule { }
