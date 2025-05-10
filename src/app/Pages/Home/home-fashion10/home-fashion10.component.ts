import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { HeaderFashion09Component } from "../../../Component/Header/header-fashion-09/header-fashion-09.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-fashion10',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, PopupComponent, FooterComponent, FollowInstagramComponent, LatestBlogComponent, ShippingComponent, CardModelComponent, HeaderFashion09Component],
    templateUrl: './home-fashion10.component.html',
    styleUrl: './home-fashion10.component.scss'
})
export class HomeFashion10Component {
  products = [
    {
      imageUrl: 'assets/images/products/pr-01.jpg',
      hoverImage: 'assets/images/products/pr-02.jpg',
      label: 'New',
      name: 'Analogue Resin Strap',
      brand: 'Kalles',
      price: 30.00,
      isHovered: false,
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/home-classic/pr-30.jpg',
      hoverImage: 'assets/images/home-classic/pr-29.jpg',
      name: 'Women Black Pants',
      brand: 'Kalles',
      price: 100.00,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-classic/pr-03.jpg',
      hoverImage: 'assets/images/home-classic/pr-04.jpg',
      name: 'Ridley High Waist',
      brand: 'Kalles',
      price: 36.00,
      isHovered: false,
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/home-classic/pr-19.jpg',
      hoverImage: 'assets/images/home-classic/pr-20.jpg',
      name: 'Cream Women Pants',
      brand: 'Kalles',
      price: 35.00,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImage: 'assets/images/products/pr-34.jpg',
      name: 'Sweatshirt in Geometric Print',
      brand: 'Kalles',
      price: 35.00,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImage: 'assets/images/products/pr-16.jpg',
      name: 'Mercury Tee',
      brand: 'Kalles',
      price: 68.00,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/products/pr-05.jpg',
      hoverImage: 'assets/images/products/pr-05.jpg',
      name: 'Blush Beanie',
      brand: 'H&M',
      price: 15.00,
      isHovered: false
    }
  ];

  products2 = [
    {
      "imageUrl": "assets/images/products/pr-19.jpg",
      "hoverImage": "assets/images/products/pr-20.jpg",
      "name": "Circle Snapback Cap",
      "brand": "Mi-Pac",
      "price": 25.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-metro/pr-q6.jpg",
      "hoverImage": "assets/images/home-metro/pr-q7.jpg",
      "name": "Crosshatch Backpack",
      "brand": "Mi-Pac",
      "price": 30.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-31.jpg",
      "hoverImage": "assets/images/home-classic/pr-33.jpg",
      "name": "Men pants",
      "brand": "Kalles",
      "price": 49.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/products/pr-23.jpg",
      "hoverImage": "assets/images/products/pr-24.jpg",
      "name": "Dusk Pom Beanie",
      "brand": "CK",
      label: 'New',
      "price": 25.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/products/pr-36.jpg",
      "hoverImage": "assets/images/products/pr-37.jpg",
      "name": "Sampson Lo Trainers",
      "brand": "Nike",
      "price": 65.00,
      sizes: ['S', 'M', 'L'],
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-27.jpg",
      "hoverImage": "assets/images/home-classic/pr-28.jpg",
      "name": "City Backpack Black",
      "brand": "Kalles",
      "price": 55.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/products/pr-36.jpg",
      "hoverImage": "assets/images/products/pr-37.jpg",
      "name": "Sampson Lo Trainers",
      "brand": "Nike",
      "price": 65.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-27.jpg",
      "hoverImage": "assets/images/home-classic/pr-28.jpg",
      "name": "City Backpack Black",
      "brand": "Kalles",
      "price": 55.00,
      sizes: ['S', 'M', 'L'],
      "isHovered": false
    }
  ];

  products3 = [
    {
      "imageUrl": "assets/images/home-classic/pr-27.jpg",
      "hoverImage": "assets/images/home-classic/pr-28.jpg",
      "name": "City Backpack Black",
      "brand": "Kalles",
      sizes: ['S', 'M', 'L'],
      "price": 55.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-17.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-18.jpg",
      "name": "Women clothing combo",
      "brand": "N/A",
      "price": "3.50–30.00",
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-19.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-20.jpg",
      "name": "Neck Snap Tee",
      "brand": "N/A",
      "price": 12.00,
      sizes: ['S', 'M', 'L'],
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-21.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-22.jpg",
      "name": "Coaches Cap Black",
      "brand": "N/A",
      "price": 15.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-23.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-24.jpg",
      "name": "Retro Lace Up Sneakers",
      "brand": "N/A",
      "price": "30.00–40.00",
      label: 'New',
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-lookbook/pinner-p-03.jpg",
      "hoverImage": "assets/images/home-lookbook/pinner-p-04.jpg",
      "name": "Striped Long Sleeve Top",
      "brand": "N/A",
      "price": 20.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-23.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-24.jpg",
      "name": "Retro Lace Up Sneakers",
      "brand": "N/A",
      "price": "30.00–40.00",
      label: 'New',
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-lookbook/pinner-p-03.jpg",
      "hoverImage": "assets/images/home-lookbook/pinner-p-04.jpg",
      "name": "Striped Long Sleeve Top",
      "brand": "N/A",
      "price": 20.00,
      "isHovered": false
    }
  ];

  products4 = [
    {
      "imageUrl": "assets/images/home-classic/mega-bagal-1.jpg",
      "hoverImage": "assets/images/home-classic/mega-bagal-3.jpg",
      "name": "Wash me!",
      "brand": "",
      label: 'New',
      "sizes": [],
      "price": 35.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/mega-cq-4.jpg",
      "hoverImage": "assets/images/home-classic/mega-cq-1.jpg",
      "name": "Woleen Tee",
      "brand": "",
      "sizes": [],
      "price": 35.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-30.jpg",
      "hoverImage": "assets/images/home-classic/pr-29.jpg",
      "name": "Women Black Pants",
      "brand": "",
      "sizes": [],
      "price": 100.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-31.jpg",
      "hoverImage": "assets/images/home-classic/pr-33.jpg",
      "name": "Men pants",
      "brand": "",
      "sizes": ["S", "M", "L"],
      "price": 49.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-03.jpg",
      "hoverImage": "assets/images/home-classic/pr-04.jpg",
      "name": "Ridley High Waist",
      "brand": "",
      "sizes": [],
      "price": 36.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-03.jpg",
      "hoverImage": "assets/images/home-classic/pr-04.jpg",
      "name": "Sweatshirt in Geometric Print",
      "brand": "",
      "sizes": [],
      "price": 35.00,
      "isHovered": false
    }
  ];

  products5 = [
    {
      "imageUrl": "assets/images/products/pr-19.jpg",
      "hoverImage": "assets/images/products/pr-20.jpg",
      "name": "Circle Snapback Cap",
      "brand": "",
      "sizes": [],
      "price": 25.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-29.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-30.jpg",
      "name": "Short Sleeved Hoodie",
      "brand": "",
      "sizes": [],
      "price": 30.00,
      "discountPrice": 45.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/products/pr-04.jpg",
      "hoverImage": "assets/images/products/pr-05.jpg",
      "name": "Blush Beanie",
      "brand": "",
      "sizes": [],
      "price": 15.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-33.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-34.jpg",
      "name": "Sunny Life",
      "brand": "",
      "sizes": [],
      label: 'New',
      "price": 68.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-31.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-32.jpg",
      "name": "Track Pants With Zip Sides",
      "brand": "",
      "sizes": [],
      "price": 68.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-03.jpg",
      "hoverImage": "assets/images/home-classic/pr-04.jpg",
      "name": "Ridley High Waist",
      "brand": "",
      "sizes": [],
      "price": 36.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-31.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-32.jpg",
      "name": "Track Pants With Zip Sides",
      "brand": "",
      "sizes": [],
      "price": 68.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-classic/pr-03.jpg",
      "hoverImage": "assets/images/home-classic/pr-04.jpg",
      "name": "Ridley High Waist",
      "brand": "",
      "sizes": [],
      "price": 36.00,
      "isHovered": false
    }
  ];

  products6 = [
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-37.png",
      "hoverImage": "assets/images/home-fashion-9/pr-s-38.png",
      "name": "Simple Skin T-shirt",
      "price": "$56.00",
      "brand": "N/A",
      label: 'New',
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-39.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-40.jpg",
      "name": "Leather White Trainers",
      "price": "$20.00",
      "brand": "N/A",
      sizes: ['S', 'M', 'L'],
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-41.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-42.jpg",
      "name": "White Sneaker Shoes",
      "price": "$30.00",
      "brand": "N/A",
      "discountPrice": "$60.00",
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/products/pr-38.jpg",
      "hoverImage": "assets/images/products/pr-39.jpg",
      "name": "Wide Fit Dusty",
      "brand": "N/A",
      "price": "$12.00",
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-43.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-44.jpg",
      "name": "Stan Smith Trainers",
      "price": "$75.00",
      "brand": "N/A",
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/products/pr-36.jpg",
      "hoverImage": "assets/images/products/pr-37.jpg",
      "name": "Sampson Lo Trainers",
      "price": "$65.00",
      "brand": "N/A",
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-23.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-24.jpg",
      "name": "Retro Lace Up Sneakers",
      "price": "$30.00 – $40.00",
      "brand": "N/A",
      "isHovered": false
    }
  ];

  products7 = [
    {
      "imageUrl": "assets/images/home-metro/pr-q6.jpg",
      "hoverImage": "assets/images/home-metro/pr-q7.jpg",
      "name": "Crosshatch Backpack",
      "brand": "Mi-Pac",
      "sizes": [],
      "price": 30.00,
      "discountPrice": null,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-45.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-46.jpg",
      "name": "Angled Rimless Sunglasses",
      "brand": "",
      "sizes": [],
      "price": 10.00,
      "discountPrice": null,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/products/pr-23.jpg",
      "hoverImage": "assets/images/products/pr-24.jpg",
      "name": "Dusk Pom Beanie",
      "brand": "CK",
      "sizes": [],
      "price": 25.00,
      "discountPrice": null,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/megamenu/pr-07.jpg",
      "hoverImage": "assets/images/megamenu/pr-08.jpg",
      "name": "Cluse La Boheme Rose Gold",
      "brand": "",
      "sizes": [],
      "price": 60.00,
      "discountPrice": 45.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-37.png",
      "hoverImage": "assets/images/home-fashion-9/pr-s-38.png",
      "name": "Simple Skin T-shirt",
      "brand": "",
      "sizes": [],
      label: 'New',
      "price": 56.00,
      "discountPrice": null,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-47.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-48.jpg",
      "name": "Sport Sneaker",
      "brand": "",
      "sizes": [],
      "price": 35.00,
      "discountPrice": null,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-50.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-50.jpg",
      "name": "Skin Sweatpants",
      "brand": "",
      "sizes": [],
      "price": 75.00,
      "discountPrice": 45.00,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-47.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-48.jpg",
      "name": "Sport Sneaker",
      "brand": "",
      "sizes": [],
      "price": 35.00,
      "discountPrice": null,
      "isHovered": false
    },
    {
      "imageUrl": "assets/images/home-fashion-9/pr-s-50.jpg",
      "hoverImage": "assets/images/home-fashion-9/pr-s-50.jpg",
      "name": "Skin Sweatpants",
      "brand": "",
      "sizes": [],
      "price": 75.00,
      "discountPrice": 45.00,
      "isHovered": false
    }
  ];
  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
  }

  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }
}