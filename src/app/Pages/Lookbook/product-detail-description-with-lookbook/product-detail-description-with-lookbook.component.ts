import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-description-with-lookbook',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, CardModelComponent, ProductModalsComponent, PopupComponent, FooterComponent, ProductRecentlyCardComponent, ProductLikeCardComponent, HeaderComponent],
    templateUrl: './product-detail-description-with-lookbook.component.html',
    styleUrl: './product-detail-description-with-lookbook.component.scss'
})
export class ProductDetailDescriptionWithLookbookComponent {
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
  size: string = 'M';

  setSize(selectedSize: string) {
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
