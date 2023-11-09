import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slides = [
    {
      id: 0,
      url: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/Banner.png',
      urlMobile: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/image%2016.png',
    },
    {
      id: 1,
      url: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Banner-green.png',
      urlMobile: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/image%2016-green.png',
    },
    {
      id: 2,
      url: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Banner-red.png',
      urlMobile: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/image%2016-red.png',
    },
  ]

  currentSlide: number = 0
  windowWidth = window.innerWidth

  ngOnInit() {
    const interval = setInterval(() => {
      this.handleNextSlide();
    }, 5000);

    const handleWindowResize = () => {
      this.windowWidth = window.innerWidth

      this.isMobile = this.windowWidth <= 640;
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearInterval(interval);
    };
  }

  isMobile = this.windowWidth <= 640;

  handleNextSlide() {
    if (this.currentSlide === this.slides.length - 1) {
      this.currentSlide = 0
    } else {
      this.currentSlide = this.currentSlide + 1
    }
  }

  handlePrevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.slides.length - 1
    } else {
      this.currentSlide = this.currentSlide - 1
    }
  }

  handleButtonSlide(id: number) {
    this.currentSlide = id;
  }
}
