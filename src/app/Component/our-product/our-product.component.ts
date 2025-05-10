import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-our-product',
    imports: [CommonModule, CommonModule],
    templateUrl: './our-product.component.html',
    styleUrl: './our-product.component.scss'
})
export class OurProductComponent {
  products = [
    {
      name: 'City Backpack Black',
      price: '$55.00',
      isHovered: true,
      defaultImage: 'assets/images/products/pr-29.jpg',
      hoverImage: 'assets/images/products/pr-30.jpg',
      detailUrl: 'product-detail-layout-01'
    },
    {
      name: 'Women Black Pants',
      price: '$100.00',
      isHovered: true,
      defaultImage: 'assets/images/home-metro/pr-q10.jpg',
      hoverImage: 'assets/images/home-metro/pr-q11.jpg',
      detailUrl: 'product-detail-layout-01'
    },
    {
      name: 'Mercury Tee',
      price: '$68.00',
      isHovered: true,
      defaultImage: 'assets/images/products/pr-15.jpg',
      hoverImage: 'assets/images/products/pr-14.jpg',
      detailUrl: '#!',
      colorOptions: [
        { image: 'assets/images/home-metro/pr-q1.jpg' },
        { image: 'assets/images/home-metro/pr-q2.jpg' }
      ]
    },
    {
      name: 'Men Pants',
      price: '$49.00 – $56.00',
      isHovered: true,
      defaultImage: 'assets/images/products/pr-12.jpg',
      hoverImage: 'assets/images/products/pr-14.jpg',
      detailUrl: 'product-detail-layout-01',
      colorOptions: [
        { image: 'assets/images/products/pr-12.jpg' },
        { image: 'assets/images/products/pr-34.jpg' }
      ]
    }
  ];
  products2 = [
    {
      imageUrl: 'assets/images/products/pr-01.jpg',
      hoverImageUrl: 'assets/images/products/pr-02.jpg',
      label: 'New',
      labelClass: 'bg-success',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      sizes: 'XS, S, M, L, XL',
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/products/pr-34.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      sizes: 'S, M, L',
    },
    {
      imageUrl: 'assets/images/products/pr-04.jpg',
      title: 'Blush Beanie',
      price: '$15.00',
      sizes: 'S, M, L',
      colorOptions: [
        { image: 'assets/images/products/pr-05.jpg', colorClass: 'bg-body-tertiary' },
        { image: 'assets/images/products/pr-31.jpg', colorClass: 'bg_color_pink' },
        { image: 'assets/images/products/pr-32.jpg', colorClass: 'bg-dark' },
      ],
    },
    {
      imageUrl: 'assets/images/products/pr-11.jpg',
      label: '-25%',
      labelClass: 'bg-danger',
      title: 'Cluse La Boheme Rose Gold',
      price: '$45.00',
      oldPrice: '$60.00',
      sizes: 'XS, S, M',
      colorOptions: [
        { image: 'assets/images/products/pr-07.jpg', colorClass: 'bg_color_green' },
        { image: 'assets/images/products/pr-08.jpg', colorClass: 'bg-body-secondary' },
        { image: 'assets/images/products/pr-09.jpg', colorClass: 'bg_color_blue' },
      ],
    },
  ];
  products3 = [
    {
      image: 'assets/images/products/pr-01.jpg',
      hoverImage: 'assets/images/products/pr-02.jpg',
      isHovered: true,
      label: 'New',
      title: 'Analogue Resin Strap',
      price: 30.00,
      sizes: 'XS, S, M, L, XL',
      detailLink: 'product-detail-layout-01'
    },
    {
      image: 'assets/images/products/pr-33.jpg',
      hoverImage: 'assets/images/products/pr-34.jpg',
      isHovered: true,
      title: 'Ridley High Waist',
      price: 36.00,
      sizes: 'S, M, L',
      detailLink: 'product-detail-layout-01'
    },
    {
      image: 'assets/images/products/pr-06.jpg',
      isHovered: false,
      label: '-25%',
      title: 'Cluse La Boheme Rose Gold',
      price: 60.00,
      discountPrice: 45.00,
      sizes: 'XS, S, M',
      detailLink: '#!'
    }
  ];
  products4 = [
    {
      imageUrl: 'assets/images/products/pr-29.jpg',
      hoverImage: 'assets/images/products/pr-30.jpg',
      isHovered: true,
      title: 'City Backpack Black',
      price: '$55.00',
      detailLink: 'product-detail-layout-01',
      colors: []
    },
    {
      imageUrl: 'assets/images/home-metro/pr-q10.jpg',
      hoverImage: 'assets/images/home-metro/pr-q11.jpg',
      isHovered: true,
      title: 'Women Black Pants',
      price: '$100.00',
      detailLink: 'product-detail-layout-01',
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImage: 'assets/images/products/pr-14.jpg',
      title: 'Mercury Tee',
      isHovered: true,
      price: '$68.00',
      detailLink: '#!',
      colors: [
        { image: 'assets/images/home-metro/pr-q1.jpg', class: 'bg-body-tertiary' },
        { image: 'assets/images/home-metro/pr-q2.jpg', class: 'bg_color_pink' }
      ]
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImage: 'assets/images/products/pr-14.jpg',
      isHovered: false,
      title: 'Men Pants',
      price: '$49.00 – $56.00',
      detailLink: 'product-detail-layout-01',
      colors: [
        { image: 'assets/images/products/pr-12.jpg', class: 'bg_color_blue' },
        { image: 'assets/images/products/pr-34.jpg', class: 'bg-dark' }
      ]
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