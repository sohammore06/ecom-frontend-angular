import { Component } from '@angular/core';
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-layout-02',
    imports: [RouterLink, CommonModule, ProductRecentlyCardComponent, CommonModule, FooterComponent, PopupComponent, TopBannerComponent, HeaderComponent, ProductLikeCardComponent, CardModelComponent, ProductModalsComponent],
    templateUrl: './product-detail-layout-02.component.html',
    styleUrl: './product-detail-layout-02.component.scss'
})
export class ProductDetailLayout02Component {
  productImages = [
    { src: 'assets/images/products/thumb-01.jpg', discount: '-56%' },
    { src: 'assets/images/products/thumb-02.jpg', discount: '-56%' },
    { src: 'assets/images/products/thumb-03.jpg' },
    { src: 'assets/images/products/thumb-04.jpg' }
  ];
  selectedColor: string = 'Pink';
  selectedSize: string = 'M';

  setColor(color: string): void {
    this.selectedColor = color;
  }

  setSize(size: string): void {
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
