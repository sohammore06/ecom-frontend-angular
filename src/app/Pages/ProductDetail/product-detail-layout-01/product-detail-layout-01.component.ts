import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-layout-01',
    imports: [RouterLink, CommonModule, ProductModalsComponent, FormsModule, CommonModule, CardModelComponent, TopBannerComponent, HeaderComponent, ProductLikeCardComponent, ProductRecentlyCardComponent, FooterComponent, PopupComponent],
    templateUrl: './product-detail-layout-01.component.html',
    styleUrl: './product-detail-layout-01.component.scss'
})
export class ProductDetailLayout01Component {
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

  selectedColor: string = 'Grey';
  selectedSize: string = 'M';
  quantity: number = 1;
  shake: boolean = false;

  ngOnInit() {
    // Automatically trigger shake animation every 6 seconds
    setInterval(() => {
      this.shake = true;
      setTimeout(() => {
        this.shake = false;
      }, 2000);
    }, 6000);
  }

  selectColor(color: string, event: Event) {
    this.selectedColor = color;
  }

  increaseQuantity() {
    if (this.quantity < 100) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  images = [
    'assets/images/single-product/tab-accordion/thumb-01.jpg',
    'assets/images/single-product/tab-accordion/thumb-02.jpg',
    'assets/images/single-product/tab-accordion/thumb-03.jpg',
    'assets/images/single-product/tab-accordion/thumb-02.jpg',
    'assets/images/single-product/tab-accordion/thumb-01.jpg'
  ];
}
