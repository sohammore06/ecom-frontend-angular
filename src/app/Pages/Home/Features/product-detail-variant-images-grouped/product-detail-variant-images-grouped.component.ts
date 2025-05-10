import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../../Component/Header/header/header.component";
import { ProductLikeCardComponent } from "../../../../Component/product-like-card/product-like-card.component";
import { ProductRecentlyCardComponent } from "../../../../Component/product-recently-card/product-recently-card.component";
import { FooterComponent } from "../../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { ProductModalsComponent } from "../../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-variant-images-grouped',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, HeaderComponent, ProductLikeCardComponent, ProductRecentlyCardComponent, FooterComponent, PopupComponent, ProductModalsComponent, CardModelComponent],
    templateUrl: './product-detail-variant-images-grouped.component.html',
    styleUrl: './product-detail-variant-images-grouped.component.scss'
})
export class ProductDetailVariantImagesGroupedComponent {
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
  images = [
    'assets/images/single-product/tab-accordion/thumb-01.jpg',
    'assets/images/single-product/tab-accordion/thumb-02.jpg',
    'assets/images/single-product/tab-accordion/thumb-03.jpg',
    'assets/images/single-product/tab-accordion/thumb-02.jpg',
    'assets/images/single-product/tab-accordion/thumb-01.jpg'
  ];

  color: string = 'Grey';
  size: string = 'M';

  setColor(selectedColor: string): void {
    this.color = selectedColor;
  }

  setSize(selectedSize: string): void {
    this.size = selectedSize;
  }

}
