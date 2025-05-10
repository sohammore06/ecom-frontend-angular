import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { ProductLikeCardComponent } from "../../../Component/product-like-card/product-like-card.component";
import { ProductRecentlyCardComponent } from "../../../Component/product-recently-card/product-recently-card.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { ProductModalsComponent } from "../../../Component/product-modals/product-modals.component";
import { SwiperService } from '../../../Services/swiper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-product-detail-swatch-rectangle-color',
    imports: [RouterLink, CommonModule, TopBannerComponent, FormsModule, CommonModule, HeaderComponent, ProductLikeCardComponent, ProductRecentlyCardComponent, FooterComponent, PopupComponent, CardModelComponent, ProductModalsComponent],
    templateUrl: './product-detail-swatch-rectangle-color.component.html',
    styleUrl: './product-detail-swatch-rectangle-color.component.scss'
})
export class ProductDetailSwatchRectangleColorComponent {
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

  color: string = 'Grey';
  size: string = 'S';

  setColor(selectedColor: string, event: Event) {
    this.color = selectedColor;

    // Remove 'active' from all color buttons
    const buttons = (event.target as HTMLElement).parentElement?.querySelectorAll('.color-button');
    buttons?.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to clicked button
    (event.target as HTMLElement).classList.add('active');
  }

  setSize(selectedSize: string) {
    this.size = selectedSize;
  }

}
