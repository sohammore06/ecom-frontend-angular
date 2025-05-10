import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SwiperService } from '../../../Services/swiper.service';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-thumb-bottom',
    imports: [RouterLink, CommonModule, CardModelComponent, CommonModule, ProductModalsComponent, FooterComponent, PopupComponent, TopBannerComponent, HeaderComponent, ProductRecentlyCardComponent, ProductLikeCardComponent],
    templateUrl: './product-detail-thumb-bottom.component.html',
    styleUrl: './product-detail-thumb-bottom.component.scss'
})
export class ProductDetailThumbBottomComponent {
  images = [
    'assets/images/products/pr-15.jpg',
    'assets/images/products/pr-16.jpg',
    'assets/images/products/thumb-05.jpg',
    'assets/images/products/thumb-06.jpg'
  ];
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

  selectedColor: string = 'White Cream';
  selectedSize: string = 'M';

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  getBackgroundImage(imageUrl: string): string {
    return `url('${imageUrl}') no-repeat center / cover`;
  }

}
