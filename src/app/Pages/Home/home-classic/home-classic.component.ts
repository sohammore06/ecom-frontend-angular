import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { Header2Component } from "../../../Component/Header/header2/header2.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { OurProductComponent } from "../../../Component/our-product/our-product.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { TrendingCardComponent } from "../../../Component/trending-card/trending-card.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-classic',
    imports: [RouterLink, CommonModule, TopBannerComponent, Header2Component, CardModelComponent, CommonModule, OurProductComponent, LatestBlogComponent, FollowInstagramComponent, ShippingComponent, PopupComponent, FooterComponent, TrendingCardComponent],
    templateUrl: './home-classic.component.html',
    styleUrl: './home-classic.component.scss'
})
export class HomeClassicComponent {
  slides = [
    {
      title: "SUMMER 2020",
      subtitle: "New Arrival Collection",
      buttonText: "Explore Now",
      imageUrl: "assets/images/slide/slider-01.jpg",
      link: "/shop-filter-sidebar"
    },
    {
      title: "NEW SEASON",
      subtitle: "Lookbook Collection",
      buttonText: "Explore Now",
      imageUrl: "assets/images/slide/slider-02.jpg",
      link: "/shop-filter-sidebar"
    },
    {
      title: "SUMMER SALE",
      subtitle: "Save up to 70%",
      buttonText: "Explore Now",
      imageUrl: "assets/images/slide/slider-03.jpg",
      link: "/shop-filter-sidebar"
    }
  ];
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.mySwiper', 1, 0, 3000, 1, 1, 1);
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