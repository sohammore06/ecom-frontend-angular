import { Component } from '@angular/core';
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderVerticalComponent } from "../../../Component/Header/header-vertical/header-vertical.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-fashion-vertical',
  imports: [RouterLink, CommonModule, FollowInstagramComponent, CommonModule, ShippingComponent, LatestBlogComponent, FooterComponent, PopupComponent, CardModelComponent, TopBannerComponent, HeaderVerticalComponent],
  templateUrl: './home-fashion-vertical.component.html',
  styleUrl: './home-fashion-vertical.component.scss'
})
export class HomeFashionVerticalComponent {
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.fashionSwiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.verticalSwiper', 1, 0, 3000, 1, 2, 4);
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
  slides = [
    {
      backgroundImage: 'assets/images/home-fashion-vertical/slide-01.jpg',
      title: 'Men Collection',
      subtitle: 'CLEARANCE SALE OFF 70%',
      buttonText: 'Shop Now',
      buttonLink: 'shop',
      alignClass: 'text-center d-flex justify-content-end'
    },
    {
      backgroundImage: 'assets/images/slide/slider-02.jpg',
      title: 'NEW SEASON',
      subtitle: 'Lookbook Collection',
      buttonText: 'Explore Now',
      buttonLink: 'shop-filter-sidebar',
      alignClass: 'text-end'
    },
    {
      backgroundImage: 'assets/images/slide/slider-03.jpg',
      title: 'SUMMER SALE',
      subtitle: 'Save up to 70%',
      buttonText: 'Explore Now',
      buttonLink: 'shop-filter-sidebar',
      alignClass: 'text-start'
    }
  ];
  products = [
    {
      imageUrl: 'assets/images/products/pr-01.jpg',
      hoverImageUrl: 'assets/images/products/pr-02.jpg',
      newLabel: 'New',
      price: '$30.00',
      isHovered: false,
      name: 'Analogue Resin Strap',
      sizes: 'XS, S, M, L, XL',
      colorImages: ['assets/images/products/pr-05.jpg', 'assets/images/products/pr-31.jpg', 'assets/images/products/pr-32.jpg']
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/products/pr-34.jpg',
      newLabel: null,
      price: '$36.00',
      isHovered: false,
      name: 'Ridley High Waist',
      sizes: 'S, M, L',
      colorImages: []
    },
    {
      imageUrl: 'assets/images/products/pr-04.jpg',
      hoverImageUrl: null,
      newLabel: null,
      price: '$15.00',
      isHovered: false,
      name: 'Blush Beanie',
      sizes: 'S, M, L',
      colorImages: ['assets/images/products/pr-05.jpg', 'assets/images/products/pr-31.jpg', 'assets/images/products/pr-32.jpg']
    },
    {
      imageUrl: 'assets/images/products/pr-06.jpg',
      hoverImageUrl: null,
      newLabel: '-25%',
      price: '$45.00',
      oldPrice: '$60.00',
      isHovered: false,
      name: 'Cluse La Boheme Rose Gold',
      sizes: 'XS, S, M',
      colorImages: ['assets/images/products/pr-07.jpg', 'assets/images/products/pr-08.jpg', 'assets/images/products/pr-09.jpg']
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImageUrl: 'assets/images/products/pr-14.jpg',
      newLabel: null,
      price: '$68.00',
      isHovered: false,
      name: 'Mercury Tee',
      sizes: 'S, M, L',
      colorImages: ['assets/images/home-metro/pr-q1.jpg', 'assets/images/home-metro/pr-q2.jpg']
    },
    {
      imageUrl: 'assets/images/products/pr-27.jpg',
      hoverImageUrl: 'assets/images/products/pr-28.jpg',
      newLabel: '-34%',
      price: '$68.00',
      isHovered: false,
      name: 'Mercury Tee',
      sizes: 'S, M, L',
      colorImages: []
    },
    {
      imageUrl: 'assets/images/products/pr-18.jpg',
      hoverImageUrl: 'assets/images/products/pr-17.jpg',
      newLabel: null,
      price: '$35.00',
      isHovered: false,
      name: 'Cream Women Pants',
      sizes: 'S, M, L',
      colorImages: []
    },
    {
      imageUrl: 'assets/images/products/pr-25.png',
      hoverImageUrl: 'assets/images/products/pr-26.png',
      newLabel: null,
      price: '$50.00',
      isHovered: false,
      name: 'Black Mountain Hat',
      sizes: 'S, M, L',
      colorImages: []
    }
  ];
  products2 = [
    {
      imageUrl: 'assets/images/products/pr-29.jpg',
      hoverImageUrl: 'assets/images/products/pr-30.jpg',
      title: 'City Backpack Black',
      price: '$55.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/home-metro/pr-q10.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImageUrl: 'assets/images/products/pr-14.jpg',
      title: 'Mercury Tee',
      price: '$68.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/home-metro/pr-q1.jpg', colorClass: 'bg-body-tertiary' },
        { url: 'assets/images/home-metro/pr-q2.jpg', colorClass: 'bg_color_pink' }
      ]
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImageUrl: null,
      title: 'Men pants',
      price: '$49.00 - $56.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/products/pr-12.jpg', colorClass: 'bg_color_blue' },
        { url: 'assets/images/products/pr-34.jpg', colorClass: 'bg-dark' }
      ]
    },
    {
      imageUrl: 'assets/images/home-fashion-9/pr-s-29.jpg',
      hoverImageUrl: 'assets/images/home-fashion-9/pr-s-30.jpg',
      title: 'Short Sleeved Hoodie',
      price: '$45.00',
      salePrice: '$30.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Sweatshirt in Geometric Print',
      price: '$35.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-23.jpg',
      hoverImageUrl: 'assets/images/products/pr-23.jpg',
      title: 'Dusk Pom Beanie',
      price: '$25.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImageUrl: null,
      title: 'Men pants',
      price: '$49.00 - $56.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/products/pr-12.jpg', colorClass: 'bg_color_blue' },
        { url: 'assets/images/products/pr-34.jpg', colorClass: 'bg-dark' }
      ]
    },
    {
      imageUrl: 'assets/images/home-fashion-9/pr-s-29.jpg',
      hoverImageUrl: 'assets/images/home-fashion-9/pr-s-30.jpg',
      title: 'Short Sleeved Hoodie',
      price: '$45.00',
      salePrice: '$30.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Sweatshirt in Geometric Print',
      price: '$35.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-23.jpg',
      hoverImageUrl: 'assets/images/products/pr-23.jpg',
      title: 'Dusk Pom Beanie',
      price: '$25.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },

  ];
  products3 = [
    {
      imageUrl: 'assets/images/products/pr-29.jpg',
      hoverImageUrl: 'assets/images/products/pr-30.jpg',
      title: 'City Backpack Black',
      price: '$55.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/home-metro/pr-q10.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImageUrl: 'assets/images/products/pr-14.jpg',
      title: 'Mercury Tee',
      price: '$68.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/home-metro/pr-q1.jpg', colorClass: 'bg-body-tertiary' },
        { url: 'assets/images/home-metro/pr-q2.jpg', colorClass: 'bg_color_pink' }
      ]
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImageUrl: null,
      title: 'Men pants',
      price: '$49.00 - $56.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/products/pr-12.jpg', colorClass: 'bg_color_blue' },
        { url: 'assets/images/products/pr-34.jpg', colorClass: 'bg-dark' }
      ]
    },
  ];

  products4 = [
    {
      imageUrl: 'assets/images/products/pr-29.jpg',
      hoverImageUrl: 'assets/images/products/pr-30.jpg',
      title: 'City Backpack Black',
      price: '$55.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/home-metro/pr-q10.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImageUrl: 'assets/images/products/pr-14.jpg',
      title: 'Mercury Tee',
      price: '$68.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/home-metro/pr-q1.jpg', colorClass: 'bg-body-tertiary' },
        { url: 'assets/images/home-metro/pr-q2.jpg', colorClass: 'bg_color_pink' }
      ]
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImageUrl: null,
      title: 'Men pants',
      price: '$49.00 - $56.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/products/pr-12.jpg', colorClass: 'bg_color_blue' },
        { url: 'assets/images/products/pr-34.jpg', colorClass: 'bg-dark' }
      ]
    },
    {
      imageUrl: 'assets/images/home-fashion-9/pr-s-29.jpg',
      hoverImageUrl: 'assets/images/home-fashion-9/pr-s-30.jpg',
      title: 'Short Sleeved Hoodie',
      price: '$45.00',
      salePrice: '$30.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Sweatshirt in Geometric Print',
      price: '$35.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-23.jpg',
      hoverImageUrl: 'assets/images/products/pr-23.jpg',
      title: 'Dusk Pom Beanie',
      price: '$25.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImageUrl: null,
      title: 'Men pants',
      price: '$49.00 - $56.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/products/pr-12.jpg', colorClass: 'bg_color_blue' },
        { url: 'assets/images/products/pr-34.jpg', colorClass: 'bg-dark' }
      ]
    },
    {
      imageUrl: 'assets/images/home-fashion-9/pr-s-29.jpg',
      hoverImageUrl: 'assets/images/home-fashion-9/pr-s-30.jpg',
      title: 'Short Sleeved Hoodie',
      price: '$45.00',
      salePrice: '$30.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Sweatshirt in Geometric Print',
      price: '$35.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-23.jpg',
      hoverImageUrl: 'assets/images/products/pr-23.jpg',
      title: 'Dusk Pom Beanie',
      price: '$25.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },

  ];
  products5 = [
    {
      imageUrl: 'assets/images/products/pr-29.jpg',
      hoverImageUrl: 'assets/images/products/pr-30.jpg',
      title: 'City Backpack Black',
      price: '$55.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/home-metro/pr-q10.jpg',
      hoverImageUrl: 'assets/images/home-metro/pr-q11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: []
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImageUrl: 'assets/images/products/pr-14.jpg',
      title: 'Mercury Tee',
      price: '$68.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/home-metro/pr-q1.jpg', colorClass: 'bg-body-tertiary' },
        { url: 'assets/images/home-metro/pr-q2.jpg', colorClass: 'bg_color_pink' }
      ]
    },
    {
      imageUrl: 'assets/images/products/pr-12.jpg',
      hoverImageUrl: null,
      title: 'Men pants',
      price: '$49.00 - $56.00',
      productLink: 'product-detail-layout-01',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal',
      salePrice: null,
      isHovered: false,
      colors: [
        { url: 'assets/images/products/pr-12.jpg', colorClass: 'bg_color_blue' },
        { url: 'assets/images/products/pr-34.jpg', colorClass: 'bg-dark' }
      ]
    },
  ];
}
