import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ]
})
export class ProductPageModule { }
