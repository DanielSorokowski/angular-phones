import { Component, Input } from '@angular/core';
import { Phone } from 'src/app/interfaces/phone';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent {
  @Input() 
  phones: Phone[] | null = [];

  @Input() 
  title: string = '';

  currentSlide = 0
  slideWidth = 272

  handleNextSlide() {
    if (this.currentSlide === this.phones!.length - 1) {
      this.currentSlide = 0
    } else {
      this.currentSlide = this.currentSlide + 1
    }
  }

  handlePrevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.phones!.length - 1
    } else {
      this.currentSlide = this.currentSlide - 1
    }
  }
}
