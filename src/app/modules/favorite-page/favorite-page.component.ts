import { Component } from '@angular/core';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent {
  constructor(public phonesService: PhonesService) {}
}
