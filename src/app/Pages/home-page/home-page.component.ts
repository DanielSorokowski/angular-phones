import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/Category';
import { Phone } from 'src/app/interfaces/phone';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  phones$!: Observable<Phone[]>;
  public brandNew: Phone[] = [];
  public hotPrice: Phone[] = [];

  categories: Category[] = [
    {
      name: 'Mobile phones',
      to: '/phones',
      image: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/listSlides/public/img/Phones.png',
      count: 0,
    },
  ]

  constructor(public phonesService: PhonesService) {}

  ngOnInit() {
    this.phones$ = this.phonesService.loadAllPhones();

    this.phones$.subscribe((phones: Phone[]) => {
      this.brandNew = phones.filter(phone => phone.year === 2019);
      this.hotPrice = phones.filter(phone => phone.price < phone.fullPrice)
      this.categories[0].count = phones.length
    });
  }
}
