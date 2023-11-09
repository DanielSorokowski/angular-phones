import { Component, Input } from '@angular/core';
import { Phone } from 'src/app/interfaces/phone';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.scss']
})
export class PhoneCardComponent {
  @Input()
  phone: Partial<Phone> = {}
  doesFavExist = false
  doesCartExist = false

  priceLowered = this.phone.fullPrice !== this.phone.price

  constructor(public phonesService: PhonesService) {}

  ngOnInit() {
    this.doesFavExist = this.checkIfPhoneIsFav()
    this.doesCartExist = this.checkIfPhoneIsFav()
  }

  addToFav(phone: Partial<Phone>) {
    const phones = this.phonesService.favFromLocalStorage;

    phones.push(phone)
    localStorage.setItem('fav', JSON.stringify(phones))

    this.doesFavExist = this.checkIfPhoneIsFav()
  }

  removeFromFav(phone: Partial<Phone>) {
    const phones = this.phonesService.favFromLocalStorage.filter((storage: Phone) => storage.id !== phone.id);
    this.phonesService.favFromLocalStorage = this.phonesService.favFromLocalStorage.filter((storage: Phone) => storage.id !== phone.id);
    localStorage.setItem('fav', JSON.stringify(phones))

    this.doesFavExist = this.checkIfPhoneIsFav()
  }

  addToCart(phone: Partial<Phone>) {
    const phones = this.phonesService.cartFromLocalStorage;

    phones.push({
      id: phone.id,
      image: phone.image,
      price: phone.price,
      name: phone.name,
      quantity: 1,
    })
    localStorage.setItem('cart', JSON.stringify(phones))

    this.doesCartExist = this.checkIfPhoneIsCart()
  }

  removeFromCart(phone: Partial<Phone>) {
    const phones = this.phonesService.cartFromLocalStorage.filter((storage: Phone) => storage.id !== phone.id);
    this.phonesService.cartFromLocalStorage = this.phonesService.cartFromLocalStorage.filter((storage: Phone) => storage.id !== phone.id);
    localStorage.setItem('cart', JSON.stringify(phones))

    this.doesCartExist = this.checkIfPhoneIsCart()
  }

  checkIfPhoneIsFav() {
    return Boolean(this.phonesService.favFromLocalStorage.find((storage: Phone) => storage.id === this.phone.id))
  }

  checkIfPhoneIsCart() {
    return Boolean(this.phonesService.cartFromLocalStorage.find((storage: Phone) => storage.id === this.phone.id))
  }
}
