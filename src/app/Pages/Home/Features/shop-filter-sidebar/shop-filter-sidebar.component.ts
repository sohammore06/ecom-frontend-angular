import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-shop-filter-sidebar',
    imports: [RouterLink, CommonModule, TopBannerComponent, RouterLink, CommonModule, CommonModule, HeaderComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './shop-filter-sidebar.component.html',
    styleUrl: './shop-filter-sidebar.component.scss'
})
export class ShopFilterSidebarComponent {
  imageUrl: string = 'assets/images/megamenu/pr-11.jpg';
  products = [
    {
      id: 1,
      imageUrl: 'assets/images/products/pr-01.jpg',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      oldPrice: '',
      isNew: true,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 2,
      imageUrl: 'assets/images/megamenu/pr-11.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/megamenu/pr-11.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-35.jpg' }
      ]
    },
    {
      id: 3,
      imageUrl: 'assets/images/megamenu/pr-03.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 4,
      imageUrl: 'assets/images/products/pr-11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 5,
      imageUrl: 'assets/images/products/pr-33.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/products/pr-33.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-34.jpg' }
      ]
    },
    {
      id: 6,
      imageUrl: 'assets/images/products/pr-15.jpg',
      title: 'Mercury Tee',
      price: '$68.00',
      oldPrice: '',
      isNew: false,
      sizes: 'S, M',
      discount: false,
      colors: [
        { name: 'red', imageUrl: 'assets/images/products/pr-15.jpg' },
        { name: 'green', imageUrl: 'assets/images/products/pr-14.jpg' }
      ]
    },
    {
      id: 7,
      imageUrl: 'assets/images/megamenu/pr-05.jpg',
      title: 'Blush Beanie',
      price: '$15.00',
      oldPrice: '',
      isNew: false,
      sizes: '',
      discount: false,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/megamenu/pr-05.jpg' },
        { name: 'blue', imageUrl: 'assets/images/products/pr-31.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-32.jpg' }
      ]
    }, {
      id: 1,
      imageUrl: 'assets/images/products/pr-01.jpg',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      oldPrice: '',
      isNew: true,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 2,
      imageUrl: 'assets/images/megamenu/pr-11.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/megamenu/pr-11.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-35.jpg' }
      ]
    },
    {
      id: 3,
      imageUrl: 'assets/images/megamenu/pr-03.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 4,
      imageUrl: 'assets/images/products/pr-11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 5,
      imageUrl: 'assets/images/products/pr-33.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/products/pr-33.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-34.jpg' }
      ]
    },
  ];
  isFilterOpen = false;

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }
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