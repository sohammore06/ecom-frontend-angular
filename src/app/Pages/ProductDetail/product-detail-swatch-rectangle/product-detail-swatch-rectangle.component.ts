import { Component } from '@angular/core';
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { SwiperService } from '../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-swatch-rectangle',
    imports: [RouterLink, FormsModule, CommonModule, ProductModalsComponent, CardModelComponent, ProductLikeCardComponent, ProductRecentlyCardComponent, FooterComponent, PopupComponent, TopBannerComponent, HeaderComponent],
    templateUrl: './product-detail-swatch-rectangle.component.html',
    styleUrl: './product-detail-swatch-rectangle.component.scss'
})
export class ProductDetailSwatchRectangleComponent {
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

  selectedColor: string = 'Pink';
  selectedSize: string = 'M';

  colors: string[] = ['Gray', 'Pink', 'Black'];
  sizes: string[] = ['S', 'M', 'L'];

}
