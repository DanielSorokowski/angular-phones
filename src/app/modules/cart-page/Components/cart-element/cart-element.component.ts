import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/interfaces/Cart';
import { Phone } from 'src/app/interfaces/phone';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.scss']
})
export class CartElementComponent {
  @Input()
  cart: Partial<Cart> = {}

  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  count = 0

  constructor(public phonesService: PhonesService) {}

  ngOnInit() {
    this.count = this.cart.quantity!
    this.emitCount(this.cart.price!);
  }

  handleAdd() {
    this.count += 1
    this.emitCount(this.cart.price!);
  }

  handleSubstract() {
    if (this.count === 1) return 
    this.count -= 1
    this.emitCount(-this.cart.price!);
  }

  handleRemoveCartItem(cart: Partial<Cart>) {
    const phones = this.phonesService.cartFromLocalStorage.filter((storage: Phone) => storage.id !== cart.id);
    this.phonesService.cartFromLocalStorage = this.phonesService.cartFromLocalStorage.filter((storage: Phone) => storage.id !== cart.id);
    localStorage.setItem('cart', JSON.stringify(phones))
    this.emitCount(-this.cart.price! * this.count);
  }

  private emitCount(price: number) {
    this.countChanged.emit(price);
  }
}
