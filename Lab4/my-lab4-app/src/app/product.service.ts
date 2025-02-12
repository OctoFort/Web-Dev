import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  protected products: Product[] = [
    {
      id: 0,
      name: "Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / черный",
      price: 1179721,
      description: "Powerful apple laptop",
      photo: "/assets/product-img/macbookPro2024.jpeg",
      rating: 4,
      link: "",
    },
    {
      id: 1,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      price: 647841,
      description: "Powerful apple Smartphone",
      photo: "/assets/product-img/iPhoneProMaxBlack.jpeg",
      rating: 3,
      link: "",
    },
    {
      id: 2,
      name: "Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ черный",
      price: 470397,
      description: "Samsung's most powerful smartphone",
      photo: "/assets/product-img/samsungUltra24.jpeg",
      rating: 4,
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000",
    },
  ]

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
