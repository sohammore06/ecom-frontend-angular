import { Component } from '@angular/core';
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { SwiperService } from '../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Offcanvas } from 'bootstrap';


@Component({
    selector: 'app-product-detail-without-thumbnail',
    imports: [RouterLink, CommonModule, ProductModalsComponent, CardModelComponent, ProductRecentlyCardComponent, PopupComponent, HeaderComponent, TopBannerComponent, FooterComponent, ProductLikeCardComponent],
    templateUrl: './product-detail-without-thumbnail.component.html',
    styleUrl: './product-detail-without-thumbnail.component.scss'
})
export class ProductDetailWithoutThumbnailComponent {
  constructor(private swiperService: SwiperService) { }

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.productJewellry', 1, 0, 3000, 1, 1, 1);
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

  selectedSize: string = 'M';
  sizes: string[] = ['S', 'M', 'L'];

  selectSize(size: string) {
    this.selectedSize = size;
  }

}
