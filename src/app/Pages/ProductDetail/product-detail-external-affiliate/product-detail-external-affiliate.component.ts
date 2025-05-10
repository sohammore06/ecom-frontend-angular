import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-detail-external-affiliate',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, HeaderComponent, ProductModalsComponent, CardModelComponent, ProductLikeCardComponent, ProductRecentlyCardComponent, PopupComponent, FooterComponent],
    templateUrl: './product-detail-external-affiliate.component.html',
    styleUrl: './product-detail-external-affiliate.component.scss'
})
export class ProductDetailExternalAffiliateComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initThumbsSwiper('.productMain', '.productSmall');

  }

  size: string = 'M';

  selectSize(selectedSize: string) {
    this.size = selectedSize;
  }


  images = [
    'assets/images/single-product/tab-accordion/thumb-01.jpg',
    'assets/images/single-product/tab-accordion/thumb-02.jpg',
    'assets/images/single-product/tab-accordion/thumb-03.jpg',
    'assets/images/single-product/tab-accordion/thumb-02.jpg',
    'assets/images/single-product/tab-accordion/thumb-01.jpg'
  ];
}
