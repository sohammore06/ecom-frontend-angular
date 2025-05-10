import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperService } from '../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-product-recently-card',
    imports: [RouterLink, CommonModule, CommonModule],
    templateUrl: './product-recently-card.component.html',
    styleUrl: './product-recently-card.component.scss'
})
export class ProductRecentlyCardComponent {
  products = [
    {
      id: 1,
      name: 'Short Sleeved Hoodie',
      imageUrl: 'assets/images/products/pr-50.jpg',
      hoverImages: ['assets/images/products/pr-33.jpg', 'assets/images/products/pr-34.jpg'],
      price: 30.00,
      oldPrice: 45.00,
      discount: '-34%',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: false
    },
    {
      id: 2,
      name: 'Sweatshirt in Geometric Print',
      imageUrl: 'assets/images/products/pr-s-37.png',
      price: 35.00,
      oldPrice: null,
      discount: null,
      sizes: [],
      isNew: false
    },
    {
      id: 3,
      name: 'Dusk Pom Beanie',
      imageUrl: 'assets/images/products/pr-01.jpg',
      price: 25.00,
      oldPrice: null,
      discount: 'New',
      sizes: [],
      isNew: true
    },
    {
      id: 4,
      name: 'Circle Snapback Cap',
      imageUrl: 'assets/images/products/pr-pin-51.jpg',
      price: 25.00,
      oldPrice: null,
      discount: null,
      sizes: [],
      isNew: false
    },
    {
      id: 5,
      name: 'Short Sleeved Hoodie',
      imageUrl: 'assets/images/products/pr-50.jpg',
      hoverImages: ['assets/images/products/pr-33.jpg', 'assets/images/products/pr-34.jpg'],
      price: 30.00,
      oldPrice: 45.00,
      discount: '-34%',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: false
    },
    {
      id: 6,
      name: 'Sweatshirt in Geometric Print',
      imageUrl: 'assets/images/products/pr-s-37.png',
      price: 35.00,
      oldPrice: null,
      discount: null,
      sizes: [],
      isNew: false
    },
    {
      id: 7,
      name: 'Dusk Pom Beanie',
      imageUrl: 'assets/images/products/pr-01.jpg',
      price: 25.00,
      oldPrice: null,
      discount: 'New',
      sizes: [],
      isNew: true
    },
    {
      id: 8,
      name: 'Circle Snapback Cap',
      imageUrl: 'assets/images/products/pr-pin-51.jpg',
      price: 25.00,
      oldPrice: null,
      discount: null,
      sizes: [],
      isNew: false
    }
  ];
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.recentlySwiper', 1, 0, 3000, 1, 2, 4);
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