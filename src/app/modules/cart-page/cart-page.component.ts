import { Component } from '@angular/core';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  constructor(public phonesService: PhonesService) {}

  totalPrice = 0

  onCountChanged(price: number) {
    this.totalPrice = this.totalPrice += price
  }
}
