import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { Header2Component } from "../../../Component/Header/header2/header2.component";
import { SwiperService } from '../../../Services/swiper.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-metro',
    imports: [RouterLink, CommonModule, CardModelComponent, CommonModule, PopupComponent, FooterComponent, ShippingComponent, LatestBlogComponent, FollowInstagramComponent, TopBannerComponent, Header2Component],
    templateUrl: './home-metro.component.html',
    styleUrl: './home-metro.component.scss'
})
export class HomeMetroComponent {
  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.productSwiper', 1, 0, 3000, 2, 4, 1);
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

  slides = [
    {
      image: 'assets/images/slide/slider-01.jpg',
      subtitle: 'SUMMER 2020',
      title: 'New Arrival Collection',
      buttonText: 'Explore Now',
      link: 'shop-filter-sidebar',
      align: 'start' // left-aligned
    },
    {
      image: 'assets/images/slide/slider-02.jpg',
      subtitle: 'NEW SEASON',
      title: 'Lookbook Collection',
      buttonText: 'Explore Now',
      link: 'shop-filter-sidebar',
      align: 'end' // right-aligned
    },
    {
      image: 'assets/images/slide/slider-03.jpg',
      subtitle: 'SUMMER SALE',
      title: 'Save up to 70%',
      buttonText: 'Explore Now',
      link: 'shop-filter-sidebar',
      align: 'start' // left-aligned
    }
  ];
  products = [
    {
      name: 'Analogue Resin Strap',
      price: '$30.00',
      image: 'assets/images/home-classic/pr-01.jpg',
      hoverImage: 'assets/images/products/pr-02.jpg',
      isHovered: false,
      isNew: true,
    },
    {
      name: 'Circle Snapback Cap',
      price: '$25.00',
      image: 'assets/images/home-metro/pr-q4.jpg',
      hoverImage: 'assets/images/home-metro/pr-q5.jpg',
      isHovered: false,
      isNew: false,
    },
    {
      name: 'Mercury Tee',
      price: '$68.00',
      image: 'assets/images/home-metro/pr-q1.jpg',
      hoverImage: 'assets/images/home-metro/pr-q2.jpg',
      isHovered: false,
      isNew: false,
    }, {
      name: 'Blush Beanie',
      price: '$15.00',
      image: 'assets/images/home-classic/pr-06.jpg',
      hoverImage: 'assets/images/home-classic/pr-05.jpg',
      isHovered: false,
      isNew: false,
    },
    {
      name: 'City Backpack Black',
      price: '$55.00',
      image: 'assets/images/home-classic/pr-27.jpg',
      hoverImage: 'assets/images/home-classic/pr-28.jpg',
      isHovered: false,
      isNew: false,
    },
    {
      name: 'Men Pants',
      price: '$49.00 – $56.00',
      image: 'assets/images/home-classic/pr-31.jpg',
      hoverImage: 'assets/images/home-classic/pr-32.jpg',
      isHovered: false,
      isNew: false,
    },
    {
      name: 'Dusk Pom Beanie',
      price: '$25.00',
      image: 'assets/images/home-metro/pr-q8.jpg',
      hoverImage: 'assets/images/home-metro/pr-q9.jpg',
      isHovered: false,
      isNew: false,
    }, {
      name: 'Women Black Pants',
      price: '$100.00',
      image: 'assets/images/home-metro/pr-q10.jpg',
      hoverImage: 'assets/images/home-metro/pr-q11.jpg',
      isHovered: false,
      isNew: false
    },
    {
      name: 'Large Icon Bag',
      price: '$45.00',
      image: 'assets/images/home-metro/pr-q12.jpg',
      hoverImage: 'assets/images/home-metro/pr-q13.jpg',
      isHovered: false,
      isNew: false
    },
    {
      name: 'Cream Women Pants',
      price: '$35.00',
      image: 'assets/images/home-classic/pr-19.jpg',
      hoverImage: 'assets/images/home-classic/pr-20.jpg',
      isHovered: false,
      isNew: false
    },
    {
      name: 'La Bohème Rose Gold',
      price: '$40.00',
      image: 'assets/images/home-classic/pr-big-24.jpg',
      hoverImage: 'assets/images/home-classic/pr-big-25.jpg',
      isHovered: false,
      isNew: true
    }
  ];

  getClass(product: any) {
    return (product.name === 'Mercury Tee' || product.name === 'Women Black Pants')
      ? 'col-lg-6 col-md-3 col-6'
      : 'col-md-3 col-6';
  }

}
