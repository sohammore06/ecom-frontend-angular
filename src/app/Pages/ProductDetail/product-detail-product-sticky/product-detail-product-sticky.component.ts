import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-product-sticky',
    imports: [RouterLink, CommonModule, CardModelComponent, ProductModalsComponent, PopupComponent, ProductRecentlyCardComponent, ProductLikeCardComponent, FooterComponent, TopBannerComponent, HeaderComponent],
    templateUrl: './product-detail-product-sticky.component.html',
    styleUrl: './product-detail-product-sticky.component.scss'
})
export class ProductDetailProductStickyComponent {
  selectedColor: string = 'Pink';
  selectedSize: string = 'M';

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }
  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
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
