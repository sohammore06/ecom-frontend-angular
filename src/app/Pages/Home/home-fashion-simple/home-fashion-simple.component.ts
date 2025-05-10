import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { OurProductComponent } from "../../../Component/our-product/our-product.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderFashionComponent } from "../../../Component/Header/header-fashion/header-fashion.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-fashion-simple',
  imports: [RouterLink, CommonModule, FormsModule, CardModelComponent, CommonModule, OurProductComponent, LatestBlogComponent, FollowInstagramComponent, ShippingComponent, FooterComponent, PopupComponent, TopBannerComponent, HeaderFashionComponent],
  templateUrl: './home-fashion-simple.component.html',
  styleUrl: './home-fashion-simple.component.scss'
})
export class HomeFashionSimpleComponent {
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    this.swiperService.initSwiper('.simpleSwiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.Swiper2', 1, 0, 3000, 2, 4, 6);
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
    this.swiperService.initSwiper('.fashionSwiper', 1, 0, 3000, 1, 1, 1);
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
      title: 'SUMMER 2020',
      heading: 'New Arrival Collection',
      imageUrl: 'assets/images/slide/slider-01.jpg',
      link: 'shop-filter-sidebar',
      alignRight: false
    },
    {
      title: 'NEW SEASON',
      heading: 'Lookbook Collection',
      imageUrl: 'assets/images/slide/slider-02.jpg',
      link: 'shop-filter-sidebar',
      alignRight: true
    },
    {
      title: 'SUMMER SALE',
      heading: 'Save up to 70%',
      imageUrl: 'assets/images/slide/slider-03.jpg',
      link: 'shop-filter-sidebar',
      alignRight: false
    }
  ];
  products = [
    {
      imageUrl: 'assets/images/products/pr-01.jpg',
      hoverImage: 'assets/images/products/pr-02.jpg',
      label: 'New',
      labelClass: 'bg-success',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      imageUrl: 'assets/images/products/pr-33.jpg',
      hoverImage: 'assets/images/products/pr-34.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/products/pr-04.jpg',
      title: 'Blush Beanie',
      price: '$15.00',
      colorVariants: [
        { imageUrl: 'assets/images/products/pr-05.jpg', color: 'bg-body-tertiary' },
        { imageUrl: 'assets/images/products/pr-31.jpg', color: 'bg_color_pink' },
        { imageUrl: 'assets/images/products/pr-32.jpg', color: 'bg-dark' },
      ],
    },
    {
      imageUrl: 'assets/images/products/pr-06.jpg',
      label: '-25%',
      labelClass: 'bg-danger',
      title: 'Cluse La Boheme Rose Gold',
      originalPrice: '$60.00',
      price: '$45.00',
      priceClass: 'text-danger',
      colorVariants: [
        { imageUrl: 'assets/images/products/pr-07.jpg', color: 'bg_color_green' },
        { imageUrl: 'assets/images/products/pr-08.jpg', color: 'bg-body-secondary' },
        { imageUrl: 'assets/images/products/pr-09.jpg', color: 'bg_color_blue' },
      ],
    },
    {
      imageUrl: 'assets/images/products/pr-27.jpg',
      hoverImage: 'assets/images/products/pr-28.jpg',
      label: '-34%',
      labelClass: 'bg-danger',
      title: 'Mercury Tee',
      price: '$68.00',
    },
    {
      imageUrl: 'assets/images/products/pr-18.jpg',
      hoverImage: 'assets/images/products/pr-17.jpg',
      title: 'Cream Women Pants',
      price: '$35.00',
      sizes: ['S', 'M', 'L'],
    },
    {
      imageUrl: 'assets/images/products/pr-25.png',
      hoverImage: 'assets/images/products/pr-26.png',
      title: 'Black Mountain Hat',
      price: '$50.00',
      sizes: ['S', 'M', 'L'],
    }
  ];
  color: string = 'Pink';
  size: string = 'M';
  quantity: number = 1;

  setColor(selectedColor: string, event: Event) {
    this.color = selectedColor;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
