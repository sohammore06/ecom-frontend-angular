import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { FooterShoesComponent } from "../../../../Component/Footer/footer-shoes/footer-shoes.component";
import { HeaderComponent } from "../../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperService } from '../../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Modal, Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-pickup-availability',
    imports: [RouterLink, CommonModule, CardModelComponent, CommonModule, FooterShoesComponent, HeaderComponent, TopBannerComponent, PopupComponent],
    templateUrl: './product-detail-pickup-availability.component.html',
    styleUrl: './product-detail-pickup-availability.component.scss'
})
export class ProductDetailPickupAvailabilityComponent {
  constructor(private swiperService: SwiperService) { }

  images = [
    'assets/images/single-product/layout-02/thumb-02.jpg',
    'assets/images/single-product/layout-02/thumb-02.jpg',
    'assets/images/single-product/layout-02/thumb-03.jpg',
    'assets/images/single-product/layout-02/thumb-04.jpg',
    'assets/images/single-product/layout-02/thumb-02.jpg',
    'assets/images/single-product/layout-02/thumb-03.jpg'
  ];
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
    this.swiperService.initSwiper('.availableSwiper', 2, 5, 2500, 1, 3, 4);
    this.swiperService.initSwiper('.pickupSwiper', 2, 5, 2500, 1, 3, 4);
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