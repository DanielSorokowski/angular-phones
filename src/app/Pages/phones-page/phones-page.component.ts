import { Component } from '@angular/core';
import { Phone } from 'src/app/interfaces/phone';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent {
  sortType = {
    Newest: 'newest',
    Cheapest: 'cheapest',
    Alphabetically: 'alphabetically',
  }

  phones: Phone[] = []
  sortedPhones: Phone[] = []
  currentPhones: Phone[] = []
  selectedSort: string = 'newest'
  selectedLimit: number = 8
  currentPage = 0
  pages = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  currentPages = [0, 1, 2, 3, 4]

  constructor(public phonesService: PhonesService) {}

  ngOnInit() {
    this.phonesService.loadAllPhones().subscribe((phones: Phone[]) => {
      this.phones = phones
      this.sortedPhones = phones
      this.currentPhones = [...phones].splice(0, this.selectedLimit)
    });
  }

  sortPhones(sortingType: string, phones: Phone[]) {
    switch (sortingType) {
      case this.sortType.Newest: 
      return [...phones].sort(
        (phoneA: Phone, phoneB: Phone) => phoneB.year - phoneA.year,
        );
      case this.sortType.Cheapest:
        return [...phones].sort(
          (phoneA: Phone, phoneB: Phone) => phoneA.price - phoneB.price,
        );
      case this.sortType.Alphabetically:
        return [...phones].sort(
          (phoneA: Phone, phoneB: Phone) => phoneA.name.localeCompare(phoneB.name),
        );
      default: return phones
    }
  };

  handleSortChange() {
    this.currentPage = 0
    this.sortedPhones = this.sortPhones(this.selectedSort, this.phones);
    this.currentPhones = [...this.sortedPhones].splice(this.currentPage * this.selectedLimit, this.selectedLimit)
    

    this.pages = Array(Math.ceil(this.phones.length / this.selectedLimit)).fill(0).map((x, i) => i);

    if (this.pages.length > 4) {
      this.currentPages = [0, 1, 2, 3, 4]
    } else {
      this.currentPages = [0]
    }
  }

  changePage(page: number) {
    this.currentPage = page;

    this.currentPhones = [...this.sortedPhones].splice(this.currentPage * this.selectedLimit, this.selectedLimit)
  }

  nextPage() {
    if (this.currentPage === this.pages.length - 1) {
      this.currentPage = 0
    } else {
      this.currentPage = this.currentPage + 1
    }

    this.changePage(this.currentPage)

    if (this.currentPage % 5 === 0) {
      this.currentPages = [...this.pages].splice(this.currentPage, 5)
    }
  }

  prevPage() {
    if (this.currentPage === 0) {
      this.currentPage = this.pages.length - 1
    } else {
      this.currentPage = this.currentPage - 1
    }

    this.changePage(this.currentPage)

    if ((this.currentPage + 1) % 5 === 0) {
      this.currentPages = [...this.pages].splice(this.currentPage - 4, 5)
    }

    if (this.currentPage === this.pages.length - 1) {
      this.currentPages = [...this.pages].splice(this.pages.length - 5, 5)
    } 
  }

}
