import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-finalization',
  templateUrl: './cart-finalization.component.html',
  styleUrls: ['./cart-finalization.component.scss']
})
export class CartFinalizationComponent {
  @Input()
  totalPrice: number = 0

  @Input()
  count: number = 0

  showChild:boolean = true;
  notificationMsg = ''

  handleCheckOut() {
    if (this.totalPrice > 0) {
      this.showChild = true
      this.notificationMsg = `You need to pay ${this.totalPrice}$, Do you want to continue?`
    }
  }

}
