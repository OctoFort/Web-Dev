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
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000",
    },
    {
      id: 1,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      price: 647841,
      description: "Powerful apple Smartphone",
      photo: "/assets/product-img/iPhoneProMaxBlack.jpeg",
      rating: 3.1,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
    },
    {
      id: 2,
      name: "Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ черный",
      price: 470397,
      description: "Samsung's most powerful smartphone",
      photo: "/assets/product-img/samsungUltra24.jpeg",
      rating: 4.0,
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000",
    },
    {
      id: 3,
      name: "Видеокарта Palit GeForce RTX 4070 Ti Super GamingPro OC NED47TSH19T2-1043A 16 Гб",
      price: 548930,
      description: "GeForce RTX 4070 Ti Super 16GB Powered by AI",
      photo: "/assets/product-img/rtx4070.jpg",
      rating: 4.3,
      link: "https://kaspi.kz/shop/p/palit-geforce-rtx-4070-ti-super-gamingpro-oc-ned47tsh19t2-1043a-16-gb-116732813/?c=750000000",
    },
    {
      id: 4,
      name: "Процессор AMD Ryzen 5 5600X OEM",
      price: 56360,
      description: "Budget processor for budget PC",
      photo: "/assets/product-img/ryzen5_5600x.jpg",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/amd-ryzen-5-5600x-oem-100842722/?c=750000000",
    },
    {
      id: 5,
      name: "Процессор AMD Ryzen 7 5700X3D OEM",
      price: 114970,
      description: "Decent processor for Decent PC",
      photo: "/assets/product-img/ryzen7_5700x3d.jpg",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/amd-ryzen-7-5700x3d-oem-117222181/?c=750000000",
    },
    {
      id: 6,
      name: "Игровая приставка Nintendo Switch OLED красный-синий",
      price: 160000,
      description: "Hybrid video game console",
      photo: "/assets/product-img/nintendoSwitchOled.jpg",
      rating: 4.1,
      link: "https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000",
    },
    {
      id: 7,
      name: "Клавиатура VARMILO Lure VBM108 Bot A01A004A9A4A01A006 черный",
      price: 136990,
      description: "Newest VARMILO mechanical keyboard",
      photo: "/assets/product-img/varmilo.jpg",
      rating: 3.5,
      link: "https://kaspi.kz/shop/p/varmilo-lure-vbm108-bot-a01a004a9a4a01a006-chernyi-114426552/?c=750000000",
    },
    {
      id: 8,
      name: "Графический планшет Wacom Intuos Small Bluetooth CTL-4100WLE-N зеленый",
      price: 37989,
      description: "Graph table for drawing",
      photo: "/assets/product-img/wacomIntuos.jpg",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/wacom-intuos-small-bluetooth-ctl-4100wle-n-zelenyi-18500023/?c=750000000",
    },
    {
      id: 9,
      name: "Телевизор TCL 65C635 165 см черный",
      price: 548999,
      description: "120hz TV for gaming",
      photo: "/assets/product-img/tcl.jpg",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/tcl-65c635-165-sm-chernyi-108180829/?c=750000000",
    },
    {
      id: 10,
      name: "Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый",
      price: 113999,
      description: "Wireless headphones for your smart devices",
      photo: "/assets/product-img/airpods.jpg",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000",
    },
  ]

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
