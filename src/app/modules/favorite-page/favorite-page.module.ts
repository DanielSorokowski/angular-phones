import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './favorite-page.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    FavoritePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FavoritePageModule { }
