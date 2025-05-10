import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderFashionComponent } from "../../../Component/Header/header-fashion/header-fashion.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-lookbook-collection',
  imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, HeaderFashionComponent, LatestBlogComponent, ShippingComponent, FollowInstagramComponent, FooterComponent, PopupComponent, CardModelComponent],
  templateUrl: './home-lookbook-collection.component.html',
  styleUrl: './home-lookbook-collection.component.scss'
})
export class HomeLookbookCollectionComponent {
  slides = [
    {
      image: 'assets/images/slide/slider-01.jpg',
      subtitle: 'SUMMER 2020',
      title: 'New Arrival Collection',
      alignClass: '',
      justify: false
    },
    {
      image: 'assets/images/slide/slider-02.jpg',
      subtitle: 'NEW SEASON',
      title: 'Lookbook Collection',
      alignClass: 'text-end',
      justify: true
    },
    {
      image: 'assets/images/slide/slider-03.jpg',
      subtitle: 'SUMMER SALE',
      title: 'Save up to 70%',
      alignClass: '',
      justify: false
    }
  ]
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.lookbookSwiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.lookbookSwiper2', 1, 10, 3000, 2, 4, 6);
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
  bannerItems = [
    {
      image: 'assets/images/home-lookbook-collection/cat-left.jpg',
      link: 'shop-right-sidebar.html',
      subTitle: 'View Collections',
      title: 'LOOKBOOK',
      description: 'Your world of fashion in numbers',
      positionClass: 'bottom-0 left-0'
    },
    {
      image: 'assets/images/home-lookbook-collection/cat-center-01.jpg',
      product: true,
      discount: 34,
      productName: 'La Bohème Rose Gold',
      productLink: 'product-detail-layout-01',
      oldPrice: 60.00,
      newPrice: 45.00
    },
    {
      image: 'assets/images/home-lookbook-collection/cat-right.jpg',
      link: 'shop.html',
      subTitle: 'Men Collection',
      title: 'SALE 70%',
      buttonText: 'Shop Now',
      positionClass: 'top-50 end-0 start-0 text-center'
    }
  ];
  products = [
    {
      imageUrl: 'assets/images/products/pr-01.jpg',
      hoverImageUrl: 'assets/images/products/pr-02.jpg',
      newLabel: 'New',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      isHovered: false,  // Add isHovered here for each product
      size: 'XS, S, M, L, XL',
      detailsLink: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImageUrl: 'assets/images/products/pr-34.jpg',
      newLabel: '',
      isHovered: false,  // Add isHovered here for each product
      title: 'Ridley High Waist',
      price: '$36.00',
      size: 'S, M, L',
      detailsLink: 'product-detail-layout-01',
    },
    {
      imageUrl: 'assets/images/products/pr-04.jpg',
      hoverImageUrl: '',
      newLabel: '',
      isHovered: false,  // Add isHovered here for each product
      title: 'Blush Beanie',
      price: '$15.00',
      size: 'S, M, L',
      detailsLink: '#',
    },
    {
      imageUrl: 'assets/images/products/pr-06.jpg',
      hoverImageUrl: '',
      isHovered: false,  // Add isHovered here for each product
      newLabel: '-25%',
      title: 'Cluse La Boheme Rose Gold',
      price: '$45.00',
      originalPrice: '$60.00',
      size: 'XS, S, M',
      detailsLink: '#',
    },
    {
      imageUrl: 'assets/images/products/pr-15.jpg',
      hoverImageUrl: 'assets/images/products/pr-14.jpg',
      newLabel: '',
      isHovered: false,  // Add isHovered here for each product
      title: 'Mercury Tee',
      price: '$68.00',
      originalPrice: '',
      size: '',
      detailsLink: '#',
    },
    {
      imageUrl: 'assets/images/products/pr-27.jpg',
      hoverImageUrl: 'assets/images/products/pr-28.jpg',
      newLabel: '-34%',
      title: 'Mercury Tee',
      isHovered: false,  // Add isHovered here for each product
      price: '$68.00',
      originalPrice: '',
      size: '',
      detailsLink: '#',
    },
  ];

  // You can add logic to handle hover event here if needed
  toggleHover(product: any) {
    product.isHovered = !product.isHovered;
  }

}
