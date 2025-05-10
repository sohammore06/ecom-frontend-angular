import { Component } from '@angular/core';
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderBagComponent } from "../../../Component/Header/header-bag/header-bag.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-bag',
  imports: [RouterLink, CommonModule, FooterComponent, PopupComponent, CardModelComponent, CommonModule, TopBannerComponent, HeaderBagComponent],
  templateUrl: './home-bag.component.html',
  styleUrl: './home-bag.component.scss'
})
export class HomeBagComponent {
  ngOnInit() {
    this.swiperService.initSwiper('.bagSwiper', 1, 0, 3000, 1, 1, 1);
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
  constructor(private swiperService: SwiperService) { }
  products = [
    {
      imageUrl: 'assets/images/home-bags/pr-15.jpg',
      hoverImage: 'assets/images/home-bags/pr-16.jpg',
      name: 'Nebula Violet Backpack',
      price: '$235.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-bags/pr-16.jpg',
      hoverImage: 'assets/images/home-bags/pr-17.jpg',
      name: 'Crumpler The Algorith Backpack',
      price: '$159.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-bags/pr-18.jpg',
      hoverImage: 'assets/images/home-bags/pr-19.jpg',
      name: 'Little America Herschel Supy',
      price: '$235.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-bags/pr-20.jpg',
      hoverImage: 'assets/images/home-bags/pr-21.jpg',
      name: 'Tim Rogue Laptop Backpack',
      price: '$189.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-bags/pr-22.jpg',
      hoverImage: 'assets/images/home-bags/pr-23.jpg',
      name: 'Versatile Laptop Work Bag',
      price: '$185.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-bags/pr-24.jpg',
      hoverImage: 'assets/images/home-bags/pr-25.jpg',
      name: 'Herschel Classic Backpack',
      price: '$168.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-bags/pr-26.jpg',
      hoverImage: 'assets/images/home-bags/pr-27.jpg',
      name: 'Antihero Fortnight Backpack',
      price: '$129.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-bags/pr-28.jpg',
      hoverImage: 'assets/images/home-bags/pr-29.jpg',
      name: 'Timbuk Authority Backpack',
      price: '$205.00',
      quickViewId: '#exampleModal',
      quickShopId: '#cardModal',
      productUrl: 'product-detail-layout-01',
      isHovered: false
    }
  ];
  products2 = [
    {
      imageUrl: 'assets/images/home-bags/pr-01.jpg',
      hoverImage: 'assets/images/home-bags/pr-02.jpg',
      name: 'Tactical Bags',
      isHovered: false,
      price: '$51.00 - $57.00',
      colors: [
        { color: 'blue', imageUrl: 'assets/images/home-bags/pr-14.jpg' },
        { color: 'green', imageUrl: 'assets/images/home-bags/pr-01.jpg' },
        { color: 'success', imageUrl: 'assets/images/home-bags/pr-02.jpg' },
        { color: 'dark', imageUrl: 'assets/images/home-bags/pr-13.jpg' }
      ]
    },
    {
      imageUrl: 'assets/images/home-bags/pr-03.jpg',
      hoverImage: 'assets/images/home-bags/pr-04.jpg',
      name: 'Crumpler The Drewbob 200',
      price: '$79.00', isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/home-bags/pr-05.jpg',
      hoverImage: 'assets/images/home-bags/pr-05.jpg',
      name: 'Crumpler Rooftop Resume',
      price: '$189.00', isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/home-bags/pr-07.jpg',
      hoverImage: 'assets/images/home-bags/pr-08.jpg',
      name: 'Crumpler Big Breakfast Tote',
      price: '$199.00', isHovered: false,
      colors: []
    }
  ];

  updateImage(product: any, colorImageUrl: string) {
    product.imageUrl = colorImageUrl;
  }

}
