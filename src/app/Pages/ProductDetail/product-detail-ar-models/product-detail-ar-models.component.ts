import { Component } from '@angular/core';
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperService } from '../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-ar-models',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [ProductModalsComponent, FooterComponent, ProductRecentlyCardComponent, PopupComponent, CardModelComponent, HeaderComponent, TopBannerComponent, ProductLikeCardComponent],
    templateUrl: './product-detail-ar-models.component.html',
    styleUrl: './product-detail-ar-models.component.scss'
})
export class ProductDetailArModelsComponent {
  constructor(private swiperService: SwiperService) { }

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
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
