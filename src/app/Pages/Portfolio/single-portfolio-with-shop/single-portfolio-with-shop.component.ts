import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-single-portfolio-with-shop',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, HeaderComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './single-portfolio-with-shop.component.html',
    styleUrl: './single-portfolio-with-shop.component.scss'
})
export class SinglePortfolioWithShopComponent {
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.shopSwiper', 1, 0, 3000, 1, 2, 3);
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
  products = [
    {
      id: 1,
      name: 'Analogue Resin Strap',
      price: 30.0,
      imageUrl: 'assets/images/products/pr-01.jpg',
      hoverImageUrl: 'assets/images/products/pr-02.jpg',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      discount: null,
    },
    {
      id: 2,
      name: 'Ridley High Waist',
      price: 36.0,
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/products/pr-34.jpg',
      sizes: ['S', 'M', 'L'],
      discount: null,
    },
    {
      id: 3,
      name: 'Blush Beanie',
      price: 15.0,
      imageUrl: 'assets/images/products/pr-04.jpg',
      colorVariants: [
        'assets/images/products/pr-05.jpg',
        'assets/images/products/pr-31.jpg',
        'assets/images/products/pr-32.jpg',
      ],
      sizes: ['S', 'M', 'L'],
      discount: null,
    },
    {
      id: 4,
      name: 'Cluse La Boheme Rose Gold',
      price: 45.0,
      originalPrice: 60.0,
      imageUrl: 'assets/images/products/pr-06.jpg',
      colorVariants: [
        'assets/images/products/pr-07.jpg',
        'assets/images/products/pr-08.jpg',
        'assets/images/products/pr-09.jpg',
      ],
      sizes: ['XS', 'S', 'M'],
      discount: '-25%',
    },
    {
      id: 5,
      name: 'Mercury Tee',
      price: 68.0,
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImageUrl: 'assets/images/products/pr-14.jpg',
      sizes: [],
      discount: null,
      colorVariants: [
        'assets/images/home-metro/pr-q1.jpg',
        'assets/images/home-metro/pr-q2.jpg',
      ],
    },
  ];

}
