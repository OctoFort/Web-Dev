import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../interface/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  template: `
    <section class="category">
      <div class="checkbox-container">
        <input class="checkbox" type="checkbox" [id]="category.id"
        (change)="onCategoryChange($event)">
        <label class="checkbox-label" [for]="category.id">{{ category.name }}</label>
      </div>
    </section>
  `,
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() category!: Category;
  @Output() categorySelected = new EventEmitter<{ id: number, checked: boolean }>();

  onCategoryChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.categorySelected.emit({ id: this.category.id, checked });
  }

}
