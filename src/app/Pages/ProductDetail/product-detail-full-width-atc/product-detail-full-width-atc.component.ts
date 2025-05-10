import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-full-width-atc',
    imports: [RouterLink, CommonModule, ProductModalsComponent, CardModelComponent, ProductRecentlyCardComponent, FooterComponent, ProductLikeCardComponent, PopupComponent, HeaderComponent, TopBannerComponent],
    templateUrl: './product-detail-full-width-atc.component.html',
    styleUrl: './product-detail-full-width-atc.component.scss'
})
export class ProductDetailFullWidthAtcComponent {
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

  selectedSize: string = 'M';

  setSize(size: string): void {
    this.selectedSize = size;
  }

}
