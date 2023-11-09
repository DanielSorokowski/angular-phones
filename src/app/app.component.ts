import { Component } from '@angular/core';
import { Phone } from './interfaces/phone';
import { PhonesService } from './services/phones.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-phones';
}
