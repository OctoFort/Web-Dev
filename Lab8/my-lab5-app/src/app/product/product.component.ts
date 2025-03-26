import {ChangeDetectorRef, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { Product } from '../interface/product';
import {RouterLink} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <section class="product">
      <img [src]="product.photo" [alt]="product.name" class="product-img">
      <hr class="product-divider">
      <a [routerLink]="['/details', product.id]" class="product-link"><h2 class="product-name">{{product.name}}</h2></a>

      <div class="product-container">
        <div class="product-container-text">
          <p class="product-price">{{product.price}} ₸</p>
          <p class="product-rating">Rating: {{product.rating}}</p>
        </div>
        <div class="product-container-buttons">
<!--          <button class="product-container-button" (click)="toggleLike()">{{product.likes}} ♥️</button>-->
          <button class="product-container-button" (click)="deleteProduct()">Delete🗑️</button>
        </div>
      </div>

    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productDeleted = new EventEmitter<number>();

  productService: ProductService = inject(ProductService);
  constructor() {}

  deleteProduct() {
    this.productService.deleteProduct(this.product.id).subscribe(
      data => {
        this.productDeleted.emit(this.product.id);
      }
    );
  }
}
