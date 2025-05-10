import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal, Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-shop-packery-layout',
    imports: [RouterLink, CommonModule, TopBannerComponent, HeaderComponent, CardModelComponent, PopupComponent, FooterComponent],
    templateUrl: './shop-packery-layout.component.html',
    styleUrl: './shop-packery-layout.component.scss'
})
export class ShopPackeryLayoutComponent {
  modalInstances: { [key: string]: Modal } = {};

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
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

  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }

}