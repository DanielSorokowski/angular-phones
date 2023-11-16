import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesPageComponent } from './phones-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    PhonesPageComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ]
})
export class PhonesPageModule { }
