import { Component } from '@angular/core';
import { SwiperService } from '../../../../Services/swiper.service';
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { CommonModule } from '@angular/common';
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../../Component/Header/header/header.component";
import { TrendingCardComponent } from "../../../../Component/trending-card/trending-card.component";
import { LookbookCardComponent } from "../../../../Component/lookbook-card/lookbook-card.component";
import { SellerCardComponent } from "../../../../Component/seller-card/seller-card.component";
import { LatestBlogComponent } from "../../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../../Component/follow-instagram/follow-instagram.component";
import { ShippingComponent } from "../../../../Component/shipping/shipping.component";
import { FooterComponent } from "../../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-rtl',
    imports: [RouterLink, CommonModule, CardModelComponent, CommonModule, TopBannerComponent, HeaderComponent, TrendingCardComponent, LookbookCardComponent, SellerCardComponent, LatestBlogComponent, FollowInstagramComponent, ShippingComponent, FooterComponent, PopupComponent],
    templateUrl: './home-rtl.component.html',
    styleUrl: './home-rtl.component.scss'
})
export class HomeRtlComponent {
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

  ngAfterViewInit() {
    this.swiperService.initSwiper('.mySwiper', 1, 0, 3000, 1, 1, 1);
  }
}
