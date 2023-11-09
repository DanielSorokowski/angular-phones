import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent {
  @Input()
  text: string = ''
  confirmed = false
  
  @Output() close = new EventEmitter();

  constructor(private router: Router, public phonesService: PhonesService) {}

  handleCloseModal() {
    this.close.emit(null);
  }

  handleConfirmCheckOut() {
    this.text = `Thank you for your purchase! Redirecting to Home Page in 3 seconds`;
    this.confirmed = true
    this.phonesService.cartFromLocalStorage = []
    localStorage.setItem('cart', JSON.stringify([]))
    setTimeout(() => {
      this.router.navigateByUrl('/phones');
    }, 3000)
  }
}
