import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterCosmeticsComponent } from "../../../Component/Footer/footer-cosmetics/footer-cosmetics.component";
import { HeaderCosmeticsComponent } from "../../../Component/Header/header-cosmetics/header-cosmetics.component";
import { TopBannerCosmeticsComponent } from "../../../Component/top-banner-cosmetics/top-banner-cosmetics.component";
import { SwiperService } from '../../../Services/swiper.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-cosmetics',
    imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, RouterLink, CommonModule, CommonModule, FooterCosmeticsComponent, HeaderCosmeticsComponent, TopBannerCosmeticsComponent],
    templateUrl: './home-cosmetics.component.html',
    styleUrl: './home-cosmetics.component.scss'
})
export class HomeCosmeticsComponent {
  ngOnInit() {
    this.swiperService.initSwiper('.cosmeticSwiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.cosmeticSwiper2', 1, 0, 3000, 1, 2, 4);
    this.swiperService.initSwiper('.cosmeticSwiper3', 1, 0, 3000, 2, 3, 6);
    this.swiperService.initSwiper('.cosmeticSwiper4', 1, 0, 3000, 1, 2, 5);
    document.body.classList.add('wrapper_cus');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('wrapper_cus');
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
      name: 'Skin Medical HA5',
      price: 29.00,
      originalPrice: 29.00,
      imageUrl: 'assets/images/home-cosmetics/pr-13.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-14.jpg',
      isHovered: false,
      new: true,
      discount: null
    },
    {
      name: 'Skin Fit Glow Cushion',
      price: 49.00,
      originalPrice: 49.00,
      imageUrl: 'assets/images/home-cosmetics/pr-05.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-06.jpg',
      isHovered: false,
      new: false,
      discount: null
    },
    {
      name: 'White Dew Milky Cleanser',
      price: 65.00,
      originalPrice: 98.00,
      imageUrl: 'assets/images/home-cosmetics/pr-15.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-16.jpg',
      isHovered: false,
      new: false,
      discount: 34
    },
    {
      name: 'Water Bank Hydro Essence',
      price: 49.00,
      originalPrice: 49.00,
      imageUrl: 'assets/images/home-cosmetics/pr-17.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-18.jpg',
      isHovered: false,
      new: false,
      discount: null
    },
    {
      name: 'My Foundation All Day Long Wear',
      price: 45.00,
      originalPrice: 45.00,
      imageUrl: 'assets/images/home-cosmetics/pr-19.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-20.jpg',
      isHovered: false,
      new: false,
      discount: null
    }
  ];
  products2 = [
    {
      id: 1,
      name: 'White Dew Milky Cleanser',
      imageUrl: 'assets/images/home-cosmetics/pr-15.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-16.jpg',
      originalPrice: 98.00,
      discountedPrice: 98.00,
      discount: 34,
      isHovered: false
    },
    {
      id: 2,
      name: 'Fresh Calming Balancing Toner',
      imageUrl: 'assets/images/home-cosmetics/pr-11.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-12.jpg',
      originalPrice: null,
      discountedPrice: 49.00,
      discount: null,
      isHovered: false
    }, {
      id: 3,
      name: 'White Dew Milky Cleanser',
      imageUrl: 'assets/images/home-cosmetics/pr-15.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-16.jpg',
      originalPrice: 98.00,
      discountedPrice: 98.00,
      discount: 34,
      isHovered: false
    },
    {
      id: 4,
      name: 'Fresh Calming Balancing Toner',
      imageUrl: 'assets/images/home-cosmetics/pr-11.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-12.jpg',
      originalPrice: null,
      discountedPrice: 49.00,
      discount: null,
      isHovered: false
    }, {
      id: 5,
      name: 'White Dew Milky Cleanser',
      imageUrl: 'assets/images/home-cosmetics/pr-15.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-16.jpg',
      originalPrice: 98.00,
      discountedPrice: 98.00,
      discount: 34,
      isHovered: false
    },
    {
      id: 6,
      name: 'Fresh Calming Balancing Toner',
      imageUrl: 'assets/images/home-cosmetics/pr-11.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-12.jpg',
      originalPrice: null,
      discountedPrice: 49.00,
      discount: null,
      isHovered: false
    }, {
      id: 7,
      name: 'White Dew Milky Cleanser',
      imageUrl: 'assets/images/home-cosmetics/pr-15.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-16.jpg',
      originalPrice: 98.00,
      discountedPrice: 98.00,
      discount: 34,
      isHovered: false
    },
    {
      id: 8,
      name: 'Fresh Calming Balancing Toner',
      imageUrl: 'assets/images/home-cosmetics/pr-11.jpg',
      hoverImage: 'assets/images/home-cosmetics/pr-12.jpg',
      originalPrice: null,
      discountedPrice: 49.00,
      discount: null,
      isHovered: false
    }
  ];

  onMouseEnter(product: any): void {
    product.isHovered = true;
  }

  onMouseLeave(product: any): void {
    product.isHovered = false;
  }

}
