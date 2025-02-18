import {Component, inject} from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {ProductService} from '../product.service';
import {Product} from '../interface/product';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from '../category/category.component';
import {Category} from '../interface/category';
import {CategoryService} from '../category.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    ProductComponent,
    CommonModule,
    CategoryComponent,
  ],
  template: `

    <section>
      <form action="" class="search-product">
        <input type="text" placeholder="Search for products" class="search-text">
        <button class="search-button">Search</button>
      </form>
    </section>
    <main>
      <section class="category">
        <app-category *ngFor="let category of categories" [category]="category"
        (categorySelected)="onCategorySelectionChange($event)">
        </app-category>
      </section>
      <section class="results">
        <app-product
          *ngFor="let product of filteredProducts"
          [product]="product"
          (productDeleted)="onProductDeleted($event)">
        </app-product>
      </section>
    </main>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  productService: ProductService = inject(ProductService);

  categories: Category[] = [];
  categoryService: CategoryService = inject(CategoryService);
  selectedCategories: Set<number> = new Set();
  constructor() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.productService.getProducts()
    this.categories = this.categoryService.getCategories()
  }

  onProductDeleted(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
    this.filteredProducts = this.filteredProducts.filter(product => product.id !== productId);
  }
  onCategorySelectionChange(event: { id: number; checked: boolean }) {
    if (event.checked) {
      this.selectedCategories.add(event.id);
    } else {
      this.selectedCategories.delete(event.id);
    }

    this.applyFilters();
  }

  applyFilters() {
    if (this.selectedCategories.size === 0) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        this.selectedCategories.has(product.categoryId)
      );
    }
  }
}
