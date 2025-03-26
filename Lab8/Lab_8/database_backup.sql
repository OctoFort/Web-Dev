INSERT INTO "api_category" (id, name)
VALUES
(1, 'Computers'),
(2, 'Smartphones'),
(3, 'Accessories'),
(4, 'Gaming');



INSERT OR IGNORE INTO "api_product"
    (id, name, price, description, photo, rating, link, category_id, likes)
VALUES
(1, 'Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / черный',
 1179721, 'Powerful apple laptop',
 '/assets/product-img/macbookPro2024.jpeg', 4.8,
 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000',
 1, 43),

(2, 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
 647841, 'Powerful apple Smartphone',
 '/assets/product-img/smartphones/iPhoneProMaxBlack.jpeg', 3.1,
 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
 2, 32),

(3, 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ черный',
 470397, 'Samsung''s most powerful smartphone',
 '/assets/product-img/smartphones/samsungUltra24.jpeg', 4.0,
 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
 2, 65),

(4, 'Видеокарта Palit GeForce RTX 4070 Ti Super GamingPro OC NED47TSH19T2-1043A 16 Гб',
 548930, 'GeForce RTX 4070 Ti Super 16GB Powered by AI',
 '/assets/product-img/rtx4070.jpg', 4.3,
 'https://kaspi.kz/shop/p/palit-geforce-rtx-4070-ti-super-gamingpro-oc-ned47tsh19t2-1043a-16-gb-116732813/?c=750000000',
 1, 54),

(5, 'Процессор AMD Ryzen 5 5600X OEM',
 56360, 'Budget processor for budget PC',
 '/assets/product-img/ryzen5_5600x.jpg', 4.9,
 'https://kaspi.kz/shop/p/amd-ryzen-5-5600x-oem-100842722/?c=750000000',
 1, 0),

(6, 'Процессор AMD Ryzen 7 5700X3D OEM',
 114970, 'Decent processor for Decent PC',
 '/assets/product-img/ryzen7_5700x3d.jpg', 4.9,
 'https://kaspi.kz/shop/p/amd-ryzen-7-5700x3d-oem-117222181/?c=750000000',
 1, 300),

(7, 'Игровая приставка Nintendo Switch OLED красный-синий',
 160000, 'Hybrid video game console',
 '/assets/product-img/gaming/nintendoSwitchOled.jpg', 4.1,
 'https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000',
 4, 23),

(8, 'Клавиатура VARMILO Lure VBM108 Bot A01A004A9A4A01A006 черный',
 136990, 'Newest VARMILO mechanical keyboard',
 '/assets/product-img/varmilo.jpg', 3.5,
 'https://kaspi.kz/shop/p/varmilo-lure-vbm108-bot-a01a004a9a4a01a006-chernyi-114426552/?c=750000000',
 3, 4),

(9, 'Графический планшет Wacom Intuos Small Bluetooth CTL-4100WLE-N зеленый',
 37989, 'Graph table for drawing',
 '/assets/product-img/wacomIntuos.jpg', 4.5,
 'https://kaspi.kz/shop/p/wacom-intuos-small-bluetooth-ctl-4100wle-n-zelenyi-18500023/?c=750000000',
 3, 945),

(10, 'Телевизор TCL 65C635 165 см черный',
 548999, '120hz TV for gaming',
 '/assets/product-img/tcl.jpg', 4.5,
 'https://kaspi.kz/shop/p/tcl-65c635-165-sm-chernyi-108180829/?c=750000000',
 1, 324),

(11, 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
 113999, 'Wireless headphones for your smart devices',
 '/assets/product-img/accessories/airpods.jpg', 4.5,
 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
 3, 1000),

(12, 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
 5604, 'Charger for iPhone 18W',
 '/assets/product-img/accessories/iPhoneCharger.jpg', 1.9,
 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
 3, 4),

(13, 'Чехол Для Apple iPhone 15 Pro Max прозрачный',
 116, 'Case for iPhone 15 Pro Max',
 '/assets/product-img/accessories/case.jpeg', 1.3,
 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-max-prozrachnyi-113308490/?c=750000000',
 3, 7),

(14, 'Смартфон Samsung Galaxy S24 5G 8 ГБ/256 ГБ черный',
 316135, 'Smartphone Samsung Galaxy S24',
 '/assets/product-img/smartphones/samsungS24.jpeg', 4.9,
 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000',
 2, 3),

(15, 'Смартфон NOTHING Phone 2 12 ГБ/256 ГБ белый',
 308009, 'Smartphone NOTHING Phone 2',
 '/assets/product-img/smartphones/nothingPhone2.jpg', 4.2,
 'https://kaspi.kz/shop/p/nothing-phone-2-12-gb-256-gb-belyi-112354665/?c=750000000',
 2, 432),

(16, 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
 55636, 'Smartphone Xiaomi Redmi 13C',
 '/assets/product-img/smartphones/xiaomi.jpg', 3.2,
 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
 2, 2),

(17, 'Игровая приставка Valve Steam Deck OLED 512 Гб',
 340167, 'Valve Steam Deck OLED',
 '/assets/product-img/gaming/steamDeckOled.jpeg', 4.7,
 'https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-115001687/?c=750000000',
 4, 65),

(18, 'Игровая приставка Sony PlayStation 5 Slim',
 299999, 'Sony PlayStation 5 Slim',
 '/assets/product-img/gaming/ps5.jpg', 4.3,
 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
 4, 4),

(19, 'Игровая приставка Xbox Series X 1TB белый',
 319000, 'Xbox Series X 1TB',
 '/assets/product-img/gaming/xbox.jpeg', 4.6,
 'https://kaspi.kz/shop/p/xbox-series-x-1tb-belyi-131268902/?c=750000000',
 4, 54),

(20, 'Игровая приставка Xbox Series X 2Tb',
 499865, 'Xbox Series X 2Tb',
 '/assets/product-img/gaming/xbox2TB.jpg', 4.7,
 'https://kaspi.kz/shop/p/xbox-series-x-2tb--130884989/?c=750000000',
 4, 10);