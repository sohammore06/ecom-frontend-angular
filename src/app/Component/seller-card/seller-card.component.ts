import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-seller-card',
  imports: [CommonModule, CommonModule],
  templateUrl: './seller-card.component.html',
  styleUrl: './seller-card.component.scss'
})
export class SellerCardComponent {
  products = [
    {
      imageUrl: 'assets/images/products/pr-29.jpg',
      hoverImage: 'assets/images/products/pr-30.jpg',
      isHovered: true,
      title: 'City Backpack Black',
      price: '$55.00',
      link: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/home-metro/pr-q10.jpg',
      hoverImage: 'assets/images/home-metro/pr-q11.jpg',
      isHovered: true,
      title: 'Women Black Pants',
      price: '$100.00',
      link: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImage: 'assets/images/products/pr-14.jpg',
      isHovered: true,
      title: 'Mercury Tee',
      price: '$68.00',
      link: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImage: 'assets/images/products/pr-12.jpg',
      isHovered: true,
      title: 'Men pants',
      price: '$49.00 – $56.00',
      link: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/products/pr-21.jpg',
      hoverImage: 'assets/images/products/pr-21.jpg',
      isHovered: true,
      title: 'Short Sleeved Hoodie',
      price: '$30.00',
      link: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImage: 'assets/images/products/pr-34.jpg',
      isHovered: true,
      title: 'Sweatshirt In Geometric Print',
      price: '$36.00',
      link: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/products/pr-23.jpg',
      hoverImage: 'assets/images/products/pr-23.jpg',
      isHovered: true,
      title: 'Dusk Pom Beanie',
      price: '$25.00',
      link: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/home-metro/pr-q4.jpg',
      hoverImage: 'assets/images/home-metro/pr-q5.jpg',
      isHovered: true,
      title: 'Circle Snapback Cap',
      price: '$25.00',
      link: 'product-detail-layout-01',
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