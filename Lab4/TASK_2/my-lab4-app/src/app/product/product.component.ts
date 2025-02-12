import {Component, Input} from '@angular/core';
import { Product } from '../product';
import {RouterLink} from '@angular/router';

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

      <p class="product-price">{{product.price}} ₸</p>
      <p class="product-rating">Rating: {{product.rating}}</p>
    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
}
