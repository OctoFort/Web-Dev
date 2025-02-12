import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product';


@Component({
  standalone: true,
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <img [src]="product?.photo" [alt]="product?.name">
      <section>
        <h2>{{product?.name}}</h2>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = this.productService.getProductById(productId);
  }
}
