import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-advance-product-type',
    imports: [RouterLink, CommonModule, CardModelComponent, ProductRecentlyCardComponent, PopupComponent, TopBannerComponent, HeaderComponent, FooterComponent, ProductModalsComponent, ProductLikeCardComponent],
    templateUrl: './product-detail-advance-product-type.component.html',
    styleUrl: './product-detail-advance-product-type.component.scss'
})
export class ProductDetailAdvanceProductTypeComponent {
  size: string = 'M';
  color: string = 'white';

  setSize(selectedSize: string): void {
    this.size = selectedSize;
  }

  setColor(selectedColor: string): void {
    this.color = selectedColor;
  }
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
