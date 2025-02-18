import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../interface/product';


@Component({
  standalone: true,
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <section class="details">
        <img class="details-img" [src]="product?.photo" [alt]="product?.name">
        <section class="details-right-side">
          <h2 class="details-name">{{product?.name}}</h2>
          <p class="details-rating">Rating: {{product?.rating}}</p>
          <p class="details-price">{{product?.price}} ₸</p>
          <div class="details-buttons">
            <a href="{{product?.link}}" target="_blank"><button class="details-button">
              <img src="/assets/kaspi.png" alt="" class="details-button-img">
            </button></a>
            <button class="details-button" (click)="shareOnWhatsApp()"><img src="/assets/icons8-whatsapp-96.png" alt="whatsapp" class="details-button-whatsapp">
            </button>
          </div>
        </section>
      </section>
      <section class="details-description">
        <p class="details-description-text">Description: {{product?.description}}</p>
      </section>
    </article>


  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;

  shareOnWhatsApp() {
    const currentUrl = window.location.href;
    const message = ` Check this product: ${this.product?.name} \n ${currentUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = this.productService.getProductById(productId);
  }
}
