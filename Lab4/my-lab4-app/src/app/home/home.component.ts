import {Component, inject} from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    ProductComponent,
    CommonModule,
  ],
  template: `

    <section>
      <form action="" class="search-product">
        <input type="text" placeholder="Search for products" class="search-text">
        <button class="search-button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-product *ngFor="let product of products"
      [product]="product">
      </app-product>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];
  productService: ProductService = inject(ProductService);
  constructor() {
    this.products = this.productService.getProducts();
  }
}
