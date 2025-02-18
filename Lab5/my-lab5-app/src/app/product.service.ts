import { Injectable } from '@angular/core';
import { Product } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private storageKey = 'likedProducts';
  private productsStorageKey = 'products';

  protected products: Product[] = [
    {
      id: 0,
      name: "Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / черный",
      price: 1179721,
      description: "Powerful apple laptop",
      photo: "/assets/product-img/macbookPro2024.jpeg",
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000",
      categoryId: 1,
      likes: 43,
    },
    {
      id: 1,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      price: 647841,
      description: "Powerful apple Smartphone",
      photo: "/assets/product-img/smartphones/iPhoneProMaxBlack.jpeg",
      rating: 3.1,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
      categoryId: 2,
      likes: 32,
    },
    {
      id: 2,
      name: "Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ черный",
      price: 470397,
      description: "Samsung's most powerful smartphone",
      photo: "/assets/product-img/smartphones/samsungUltra24.jpeg",
      rating: 4.0,
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000",
      categoryId: 2,
      likes: 65,
    },
    {
      id: 3,
      name: "Видеокарта Palit GeForce RTX 4070 Ti Super GamingPro OC NED47TSH19T2-1043A 16 Гб",
      price: 548930,
      description: "GeForce RTX 4070 Ti Super 16GB Powered by AI",
      photo: "/assets/product-img/rtx4070.jpg",
      rating: 4.3,
      link: "https://kaspi.kz/shop/p/palit-geforce-rtx-4070-ti-super-gamingpro-oc-ned47tsh19t2-1043a-16-gb-116732813/?c=750000000",
      categoryId: 1,
      likes: 54,
    },
    {
      id: 4,
      name: "Процессор AMD Ryzen 5 5600X OEM",
      price: 56360,
      description: "Budget processor for budget PC",
      photo: "/assets/product-img/ryzen5_5600x.jpg",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/amd-ryzen-5-5600x-oem-100842722/?c=750000000",
      categoryId: 1,
      likes: 0,
    },
    {
      id: 5,
      name: "Процессор AMD Ryzen 7 5700X3D OEM",
      price: 114970,
      description: "Decent processor for Decent PC",
      photo: "/assets/product-img/ryzen7_5700x3d.jpg",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/amd-ryzen-7-5700x3d-oem-117222181/?c=750000000",
      categoryId: 1,
      likes: 300,
    },
    {
      id: 6,
      name: "Игровая приставка Nintendo Switch OLED красный-синий",
      price: 160000,
      description: "Hybrid video game console",
      photo: "/assets/product-img/gaming/nintendoSwitchOled.jpg",
      rating: 4.1,
      link: "https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000",
      categoryId: 4,
      likes: 23,
    },
    {
      id: 7,
      name: "Клавиатура VARMILO Lure VBM108 Bot A01A004A9A4A01A006 черный",
      price: 136990,
      description: "Newest VARMILO mechanical keyboard",
      photo: "/assets/product-img/varmilo.jpg",
      rating: 3.5,
      link: "https://kaspi.kz/shop/p/varmilo-lure-vbm108-bot-a01a004a9a4a01a006-chernyi-114426552/?c=750000000",
      categoryId: 3,
      likes: 4,
    },
    {
      id: 8,
      name: "Графический планшет Wacom Intuos Small Bluetooth CTL-4100WLE-N зеленый",
      price: 37989,
      description: "Graph table for drawing",
      photo: "/assets/product-img/wacomIntuos.jpg",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/wacom-intuos-small-bluetooth-ctl-4100wle-n-zelenyi-18500023/?c=750000000",
      categoryId: 3,
      likes: 945,
    },
    {
      id: 9,
      name: "Телевизор TCL 65C635 165 см черный",
      price: 548999,
      description: "120hz TV for gaming",
      photo: "/assets/product-img/tcl.jpg",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/tcl-65c635-165-sm-chernyi-108180829/?c=750000000",
      categoryId: 1,
      likes: 324,
    },
    {
      id: 10,
      name: "Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый",
      price: 113999,
      description: "Wireless headphones for your smart devices",
      photo: "/assets/product-img/accessories/airpods.jpg",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000",
      categoryId: 3,
      likes: 1000,
    },
    {
      id: 11,
      name: "Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый",
      price: 5604,
      description: "Charger for iPhone 18W",
      photo: "/assets/product-img/accessories/iPhoneCharger.jpg",
      rating: 1.9,
      link: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000",
      categoryId: 3,
      likes: 4,
    },
    {
      id: 12,
      name: "Чехол Для Apple iPhone 15 Pro Max прозрачный",
      price: 116,
      description: "Case for iPhone 15 Pro Max",
      photo: "/assets/product-img/accessories/case.jpeg",
      rating: 1.3,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-max-prozrachnyi-113308490/?c=750000000",
      categoryId: 3,
      likes: 7,
    },
    {
      id: 13,
      name: "Смартфон Samsung Galaxy S24 5G 8 ГБ/256 ГБ черный",
      price: 316135,
      description: "Smartphone Samsung Galaxy S24",
      photo: "/assets/product-img/smartphones/samsungS24.jpeg",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000",
      categoryId: 2,
      likes: 3,
    },
    {
      id: 14,
      name: "Смартфон NOTHING Phone 2 12 ГБ/256 ГБ белый",
      price: 308009,
      description: "Smartphone NOTHING Phone 2",
      photo: "/assets/product-img/smartphones/nothingPhone2.jpg",
      rating: 4.2,
      link: "https://kaspi.kz/shop/p/nothing-phone-2-12-gb-256-gb-belyi-112354665/?c=750000000",
      categoryId: 2,
      likes: 432,
    },
    {
      id: 15,
      name: "Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
      price: 55636,
      description: "Smartphone Xiaomi Redmi 13C",
      photo: "/assets/product-img/smartphones/xiaomi.jpg",
      rating: 3.2,
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000",
      categoryId: 2,
      likes: 2,
    },
    {
      id: 16,
      name: "Игровая приставка Valve Steam Deck OLED 512 Гб",
      price: 340167,
      description: "Valve Steam Deck OLED",
      photo: "/assets/product-img/gaming/steamDeckOled.jpeg",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-115001687/?c=750000000",
      categoryId: 4,
      likes: 65,
    },
    {
      id: 17,
      name: "Игровая приставка Sony PlayStation 5 Slim",
      price: 299999,
      description: "Sony PlayStation 5 Slim",
      photo: "/assets/product-img/gaming/ps5.jpg",
      rating: 4.3,
      link: "https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000",
      categoryId: 4,
      likes: 4,
    },
    {
      id: 18,
      name: "Игровая приставка Xbox Series X 1TB белый",
      price: 319000,
      description: "Xbox Series X 1TB",
      photo: "/assets/product-img/gaming/xbox.jpeg",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/xbox-series-x-1tb-belyi-131268902/?c=750000000",
      categoryId: 4,
      likes: 54,
    },
    {
      id: 19,
      name: "Игровая приставка Xbox Series X 2Tb",
      price: 499865,
      description: "Xbox Series X 2Tb",
      photo: "/assets/product-img/gaming/xbox2TB.jpg",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/xbox-series-x-2tb--130884989/?c=750000000",
      categoryId: 4,
      likes: 10,
    },
  ]

  constructor() {
    this.initializeStorage();
    this.loadLikesFromStorage();

  }
  private initializeStorage() {
    if (!localStorage.getItem(this.productsStorageKey)) {
      localStorage.setItem(this.productsStorageKey, JSON.stringify(this.products));
    } else {
      this.products = JSON.parse(localStorage.getItem(this.productsStorageKey)!); // PRODUCTS FROM LOCAL STORAGE!!!
    }
  }
  private loadLikesFromStorage() {
    const likedProducts = JSON.parse(localStorage.getItem(this.storageKey) || '{}');

    this.products.forEach(product => {
      if (likedProducts[product.id] !== undefined) {
        product.likes = likedProducts[product.id];
      }
    });
  }

  toggleLike(productId: number) {
    const likedProducts = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    const storedProducts: Product[] = JSON.parse(localStorage.getItem(this.productsStorageKey) || '[]');

    const product = this.products.find(p => p.id === productId);
    const storedProduct = storedProducts.find(p => p.id === productId);

    if (!product || !storedProduct) return;

    if (likedProducts[productId] !== undefined) {
      product.likes--;
      storedProduct.likes--;
      delete likedProducts[productId];
    } else {
      product.likes++;
      storedProduct.likes++;
      likedProducts[productId] = product.likes;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(likedProducts));
    localStorage.setItem(this.productsStorageKey, JSON.stringify(storedProducts));
  }


  deleteProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);

    let storedProducts: Product[] = JSON.parse(localStorage.getItem(this.productsStorageKey) || '[]');
    storedProducts = storedProducts.filter(product => product.id !== productId);

    localStorage.setItem(this.productsStorageKey, JSON.stringify(storedProducts));

    const likedProducts = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    if (likedProducts[productId] !== undefined) {
      delete likedProducts[productId];
      localStorage.setItem(this.storageKey, JSON.stringify(likedProducts));
    }
  }
  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
