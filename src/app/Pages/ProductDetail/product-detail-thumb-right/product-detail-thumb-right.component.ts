import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SwiperService } from '../../../Services/swiper.service';
import { Modal, Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-thumb-right',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, HeaderComponent, ProductLikeCardComponent, ProductRecentlyCardComponent, FooterComponent, PopupComponent, ProductModalsComponent, CardModelComponent],
    templateUrl: './product-detail-thumb-right.component.html',
    styleUrl: './product-detail-thumb-right.component.scss'
})
export class ProductDetailThumbRightComponent {
  images = [
    'assets/images/single-product/thumb-right/pr-10.jpg',
    'assets/images/single-product/thumb-right/thumb-02.jpg',
    'assets/images/single-product/thumb-right/thumb-03.jpg',
    'assets/images/single-product/thumb-right/pr-09.jpg',
    'assets/images/single-product/thumb-right/thumb-05.jpg',
    'assets/images/single-product/thumb-right/thumb-06.jpg',
    'assets/images/single-product/thumb-right/thumb-07.jpg',
    'assets/images/single-product/thumb-right/thumb-08.jpg',
    'assets/images/single-product/thumb-right/thumb-09.jpg',
    'assets/images/single-product/thumb-right/thumb-10.jpg'
  ];



  selectedSize: string = 'M';
  sizes: string[] = ['S', 'M', 'L'];

  selectSize(size: string) {
    this.selectedSize = size;
  }
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    this.swiperService.initThumbsSwiper('.productMain', '.productSmall');
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
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