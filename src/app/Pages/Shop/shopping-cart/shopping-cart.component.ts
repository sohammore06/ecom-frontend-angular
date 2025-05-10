import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, TopBannerComponent, CommonModule, HeaderComponent, PopupComponent, CardModelComponent, FooterComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  products = [
    {
      imageUrl: 'assets/images/home-classic/pr-03.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      detailUrl: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/home-fashion-9/pr-s-49.jpg',
      title: 'Skin Sweatpans',
      price: '$36.00',
      oldPrice: '$75.00',
      sizes: ['S', 'M', 'L'],
      detailUrl: 'product-detail-layout-01',
      colors: [
        { img: 'assets/images/home-fashion-9/pr-s-50.jpg', class: 'bg_color_pink' },
        { img: 'assets/images/home-fashion-9/pr-s-51.jpg', class: 'bg-success' },
      ],
    },
    {
      imageUrl: 'assets/images/products/pr-04.jpg',
      title: 'Black mountain hat',
      price: '$50.00',
      sizes: ['S', 'M', 'L'],
      detailUrl: '#!',
    },
    {
      imageUrl: 'assets/images/home-classic/pr-31.jpg',
      title: 'Men Pants',
      priceRange: '$49.00 - $56.00',
      sizes: ['XS', 'S', 'M'],
      detailUrl: '#!',
      colors: [
        { img: 'assets/images/home-classic/pr-31.jpg', class: 'bg-body-secondary' },
        { img: 'assets/images/home-classic/pr-33.jpg', class: 'bg-black' },
      ],
    },
    {
      imageUrl: 'assets/images/products/pr-04.jpg',
      title: 'Black mountain hat',
      price: '$50.00',
      sizes: ['S', 'M', 'L'],
      detailUrl: '#!',
    },
    {
      imageUrl: 'assets/images/home-classic/pr-31.jpg',
      title: 'Men Pants',
      priceRange: '$49.00 - $56.00',
      sizes: ['XS', 'S', 'M'],
      detailUrl: '#!',
      colors: [
        { img: 'assets/images/home-classic/pr-31.jpg', class: 'bg-body-secondary' },
        { img: 'assets/images/home-classic/pr-33.jpg', class: 'bg-black' },
      ],
    }, {
      imageUrl: 'assets/images/home-classic/pr-03.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      detailUrl: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/home-fashion-9/pr-s-49.jpg',
      title: 'Skin Sweatpans',
      price: '$36.00',
      oldPrice: '$75.00',
      sizes: ['S', 'M', 'L'],
      detailUrl: 'product-detail-layout-01',
      colors: [
        { img: 'assets/images/home-fashion-9/pr-s-50.jpg', class: 'bg_color_pink' },
        { img: 'assets/images/home-fashion-9/pr-s-51.jpg', class: 'bg-success' },
      ],
    },
  ];
  products2 = [
    {
      imageUrl: 'assets/images/single-product/pr-viewed-01.jpg',
      title: 'Felt Cowboy Hat',
      price: '$22.00',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/single-product/pr-viewed-03.jpg',
      title: 'Blue Jean',
      price: '$25.00',
      sizes: ['S', 'M', 'L'],
      detailUrl: '#!'
    },
    {
      imageUrl: 'assets/images/megamenu/pr-11.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      originalPrice: '$60.00',
      sizes: ['S', 'M', 'L'],
      detailUrl: 'product-detail-layout-01',
      discount: '-34%',
      alternateImages: [
        'assets/images/megamenu/pr-11.jpg',
        'assets/images/products/pr-35.jpg'
      ]
    },
    {
      imageUrl: 'assets/images/home-fashion-9/pr-s-37.png',
      title: 'Simple Skin T-shirt',
      price: '$56.00',
      sizes: ['XS', 'S', 'M'],
      detailUrl: '#!'
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