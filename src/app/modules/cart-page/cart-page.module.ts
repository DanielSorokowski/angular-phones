import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { CartElementComponent } from 'src/app/modules/cart-page/Components/cart-element/cart-element.component';
import { CartFinalizationComponent } from 'src/app/modules/cart-page/Components/cart-finalization/cart-finalization.component';
import { NotificationModalComponent } from 'src/app/modules/cart-page/Components/notification-modal/notification-modal.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    CartPageComponent,
    CartElementComponent,
    CartFinalizationComponent,
    NotificationModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CartPageModule { }
