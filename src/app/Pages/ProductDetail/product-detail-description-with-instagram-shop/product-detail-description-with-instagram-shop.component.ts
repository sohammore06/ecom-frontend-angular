import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { SwiperService } from '../../../Services/swiper.service';
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal, Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-description-with-instagram-shop',
    imports: [RouterLink, CommonModule, CardModelComponent, ProductModalsComponent, ProductRecentlyCardComponent, PopupComponent, FooterComponent, ProductLikeCardComponent, HeaderComponent, TopBannerComponent],
    templateUrl: './product-detail-description-with-instagram-shop.component.html',
    styleUrl: './product-detail-description-with-instagram-shop.component.scss'
})
export class ProductDetailDescriptionWithInstagramShopComponent {
  constructor(private swiperService: SwiperService) { }

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    this.swiperService.initThumbsSwiper('.productMain', '.productSmall');

    this.swiperService.initSwiper('.descriptionInstaSwiper', 1, 0, 3000, 1, 2, 4);
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      this.modalInstance = new Modal(modalElement);
    }
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
  modalInstance!: Modal;

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }
}
