import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { SwiperService } from '../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-sidebar-full-height',
    imports: [RouterLink, CommonModule, TopBannerComponent, HeaderComponent, ProductLikeCardComponent, FooterComponent, PopupComponent, ProductModalsComponent, CardModelComponent, ProductRecentlyCardComponent],
    templateUrl: './product-detail-sidebar-full-height.component.html',
    styleUrl: './product-detail-sidebar-full-height.component.scss'
})
export class ProductDetailSidebarFullHeightComponent {
  constructor(private swiperService: SwiperService) { }

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    const thumbSwiper = this.swiperService.initThumbSwiper('.productSm');

    // Then initialize the main Swiper and link it to the thumbnail Swiper
    this.swiperService.initMainSwiper('.productLg', thumbSwiper);
    this.swiperService.initThumbsSwiper('.productMain', '.productSmall');
    const offcanvasElements = document.querySelectorAll('.offcanvas');
    offcanvasElements.forEach((offcanvasElement) => {
      const offcanvasId = offcanvasElement.getAttribute('id');
      if (offcanvasId) {
        const offcanvas = new Offcanvas(offcanvasElement as HTMLElement);
        this.offcanvasInstances[offcanvasId] = offcanvas;
      }
    });
  }

  openOffcanvas(offcanvasId: string) {
    const offcanvas = this.offcanvasInstances[offcanvasId];
    if (offcanvas) {
      offcanvas.show();
    } else {
      console.error(`Offcanvas with ID '${offcanvasId}' not found 🔥`);
    }
  }
}
