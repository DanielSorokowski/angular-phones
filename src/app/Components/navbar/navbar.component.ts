import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen = false
  burgerIcon = 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/burger.png'
  currentUrl: string = 'home';

  constructor(private router: Router, public phonesService: PhonesService) {
    this.currentUrl = this.router.url;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

  openNavbar() {
    this.isOpen = !this.isOpen

    this.burgerIcon = this.isOpen
      ? 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/cross.png'
      : 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/burger.png'
  }
}
