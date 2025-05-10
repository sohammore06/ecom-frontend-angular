import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-trending-card',
    imports: [RouterLink, CommonModule, CommonModule],
    templateUrl: './trending-card.component.html',
    styleUrl: './trending-card.component.scss'
})
export class TrendingCardComponent {
  products = [
    {
      imageUrl: 'assets/images/products/pr-01.jpg',
      hoverImage: 'assets/images/products/pr-02.jpg',
      isHovered: true,
      discount: '-25%', // Discount label
      isNew: true, // New label
      title: 'Analogue Resin Strap',
      price: '$30.00',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImage: 'assets/images/products/pr-34.jpg',
      isHovered: true,
      discount: '', // No discount
      isNew: false, // Not a new product
      title: 'Ridley High Waist',
      price: '$36.00',
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/products/pr-04.jpg',
      hoverImage: 'assets/images/products/pr-34.jpg',
      isHovered: true,
      discount: '', // No discount
      isNew: false, // Not a new product
      title: 'Blush Beanie',
      price: '$15.00',
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/products/pr-06.jpg',
      hoverImage: 'assets/images/products/pr-34.jpg',
      isHovered: true,
      discount: '-25%', // Discount label
      isNew: false, // New label
      title: 'Cluse La Boheme Rose Gold',
      price: '$45.00',
      oldPrice: '$60.00',
      sizes: ['XS', 'S', 'M'],
    }, {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImage: 'assets/images/products/pr-14.jpg',
      isHovered: true,
      discount: '',
      isNew: false,
      title: 'Mercury Tee',
      price: '$68.00',
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/products/pr-27.jpg',
      hoverImage: 'assets/images/products/pr-28.jpg',
      isHovered: true,
      discount: '-34%',
      isNew: false,
      title: 'Mercury Tee',
      price: '$68.00',
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/products/pr-18.jpg',
      hoverImage: 'assets/images/products/pr-17.jpg',
      isHovered: true,
      discount: '',
      isNew: false,
      title: 'Cream Women Pants',
      price: '$35.00',
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/products/pr-25.png',
      hoverImage: 'assets/images/products/pr-26.png',
      isHovered: true,
      discount: '',
      isNew: false,
      title: 'Black Mountain Hat',
      price: '$50.00',
      sizes: ['S', 'M', 'L'],
    }
  ];

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const tooltipTriggerList: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
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
  constructor(private elementRef: ElementRef) { }
}
