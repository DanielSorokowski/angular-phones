import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneCardComponent } from '../Components/phone-card/phone-card.component';
import { BackButtonComponent } from '../Components/back-button/back-button.component';
import { SliderListComponent } from '../Components/slider-list/slider-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [PhoneCardComponent, BackButtonComponent, SliderListComponent],
  exports: [PhoneCardComponent, BackButtonComponent, SliderListComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}