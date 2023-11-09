import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Phone } from 'src/app/interfaces/phone';
import { PhoneExtended } from 'src/app/interfaces/phoneExtended';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  phones: Phone[] = [];
  phone: Partial<PhoneExtended> = {};
  selectedImageIndex = 0
  currentUrl: string = '';
  currentPhone: Partial<Phone> = {}
  doesFavExist = false
  doesCartExist = false
  constructor(public phonesService: PhonesService, private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit() {
    this.doesFavExist = this.checkIfPhoneIsFav()
    this.doesCartExist = this.checkIfPhoneIsFav()
      
    this.phonesService.loadPhonesExtended(this.currentUrl.split('/')[2]).subscribe((phone: PhoneExtended) => {
      this.phone = phone;
    });
  
    this.phonesService.loadAllPhones().subscribe((phones: Phone[]) => {
      this.phones = phones.sort(() => Math.random() - 0.5).slice(0, 10);

      this.currentPhone = phones.find(phone => phone.name === this.phone.name)!
    });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
  
        this.phonesService.loadPhonesExtended(this.currentUrl.split('/')[2]).subscribe((phone: PhoneExtended) => {
          this.phone = phone;
        });
      });

  }

  setSelectedImage(index: number) {
    this.selectedImageIndex = index
  }

  changeURL = (index: number, newParameter: string) => {
    const currentPhoneId = this.phone.id!.split('-');
    const currentParameter = currentPhoneId.length - +index;
    currentPhoneId[currentParameter] = newParameter.toLocaleLowerCase();

    return currentPhoneId.join('-');
  }

  addToFav(phone: Partial<Phone>) {
    const phones = this.phonesService.favFromLocalStorage;

    phones.push(phone)
    localStorage.setItem('fav', JSON.stringify(phones))

    this.doesFavExist = this.checkIfPhoneIsFav()
  }

  removeFromFav(phone: Partial<Phone>) {
    const phones = this.phonesService.favFromLocalStorage.filter((storage: Phone) => storage.name !== phone.name);
    this.phonesService.favFromLocalStorage = this.phonesService.favFromLocalStorage.filter((storage: Phone) => storage.name !== phone.name);
    localStorage.setItem('fav', JSON.stringify(phones))

    this.doesFavExist = this.checkIfPhoneIsFav()
  }

  checkIfPhoneIsFav() {
    return Boolean(this.phonesService.favFromLocalStorage.find((storage: Phone) => storage.name === this.phone.name))
  }

  addToCart(phone: Partial<Phone>) {
    const phones = this.phonesService.cartFromLocalStorage;

    phones.push(phone)
    localStorage.setItem('cart', JSON.stringify(phones))

    this.doesCartExist = this.checkIfPhoneIsCart()
  }

  removeFromCart(phone: Partial<Phone>) {
    const phones = this.phonesService.cartFromLocalStorage.filter((storage: Phone) => storage.name !== phone.name);
    this.phonesService.cartFromLocalStorage = this.phonesService.cartFromLocalStorage.filter((storage: Phone) => storage.name !== phone.name);
    localStorage.setItem('cart', JSON.stringify(phones))

    this.doesCartExist = this.checkIfPhoneIsCart()
  }

  checkIfPhoneIsCart() {
    return Boolean(this.phonesService.cartFromLocalStorage.find((storage: Phone) => storage.name === this.phone.name))
  }
}
