import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperService } from '../../Services/swiper.service';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-product-like-card',
    imports: [CommonModule, CommonModule],
    templateUrl: './product-like-card.component.html',
    styleUrl: './product-like-card.component.scss'
})
export class ProductLikeCardComponent {
  products = [
    {
      id: 1,
      name: 'Ridley High Waist',
      imageUrl: 'assets/images/products/pr-34.jpg',
      price: 36.00,
      sizes: ['S', 'M', 'L'],
      discount: null,
      alternateImages: [],
    },
    {
      id: 2,
      name: 'Skin Sweatpans',
      imageUrl: 'assets/images/home-fashion-9/pr-s-50.jpg',
      price: 45.00,
      originalPrice: 60.00,
      discount: '-25%',
      sizes: ['XS', 'S', 'M'],
      alternateImages: [
        { color: 'bg_color_pink2', url: 'assets/images/home-fashion-9/pr-s-50.jpg' },
        { color: 'bg-blue-dark', url: 'assets/images/home-fashion-9/pr-s-51.jpg' }
      ]
    },
    {
      id: 3,
      name: 'Blush Beanie',
      imageUrl: 'assets/images/products/pr-05.jpg',
      price: 15.00,
      sizes: ['S', 'M', 'L'],
      alternateImages: [
        { color: 'bg-body-tertiary', url: 'assets/images/products/pr-05.jpg' },
        { color: 'bg_color_pink', url: 'assets/images/products/pr-31.jpg' },
        { color: 'bg-dark', url: 'assets/images/products/pr-32.jpg' }
      ]
    },
    {
      id: 4,
      name: 'Cluse La Boheme Rose Gold',
      imageUrl: 'assets/images/home-classic/pr-31.jpg',
      price: 45.00,
      originalPrice: 60.00,
      discount: '-25%',
      sizes: ['XS', 'S', 'M'],
      alternateImages: [
        { color: 'bg_color_green', url: 'assets/images/home-classic/pr-31.jpg' },
        { color: 'bg-black', url: 'assets/images/home-classic/pr-33.jpg' }
      ]
    },
    {
      id: 5,
      name: 'Cream Women Pants',
      imageUrl: 'assets/images/home-classic/pr-20.jpg',
      price: 30.00,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      discount: '40%',
      alternateImages: []
    },
    {
      id: 6,
      name: 'Mercury Tee',
      imageUrl: 'assets/images/products/pr-14.jpg',
      price: 68.00,
      sizes: [],
      discount: null,
      alternateImages: [
        { color: 'bg-body-tertiary', url: 'assets/images/home-metro/pr-q1.jpg' },
        { color: 'bg_color_pink', url: 'assets/images/home-metro/pr-q2.jpg' }
      ]
    },
    {
      id: 7,
      name: 'Mercury Tee',
      imageUrl: 'assets/images/products/pr-28.jpg',
      price: 68.00,
      sizes: [],
      discount: '-34%',
      alternateImages: []
    },
    {
      id: 8,
      name: 'Cream Women Pants',
      imageUrl: 'assets/images/products/pr-17.jpg',
      price: 35.00,
      sizes: ['S', 'M', 'L'],
      discount: null,
      alternateImages: []
    },
    {
      id: 9,
      name: 'Black Mountain Hat',
      imageUrl: 'assets/images/products/pr-26.png',
      price: 50.00,
      sizes: ['S', 'M', 'L'],
      discount: null,
      alternateImages: []
    }
  ];

  imageUrlMap: { [key: number]: string } = {};

  constructor(private swiperService: SwiperService) {
    this.products.forEach(product => {
      this.imageUrlMap[product.id] = product.imageUrl;
    });
  }

  changeImage(productId: number, newUrl: string) {
    this.imageUrlMap[productId] = newUrl;
  }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    this.swiperService.initSwiper('.SwiperProduct', 1, 0, 3000, 1, 2, 4);
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