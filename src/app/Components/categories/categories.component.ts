import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input()
  categories: Category[] = []
}
