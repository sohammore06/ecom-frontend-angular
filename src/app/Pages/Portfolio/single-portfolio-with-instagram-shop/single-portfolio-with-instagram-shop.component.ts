import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-single-portfolio-with-instagram-shop',
    imports: [RouterLink, CommonModule, TopBannerComponent, HeaderComponent, CardModelComponent, PopupComponent, FooterComponent],
    templateUrl: './single-portfolio-with-instagram-shop.component.html',
    styleUrl: './single-portfolio-with-instagram-shop.component.scss'
})
export class SinglePortfolioWithInstagramShopComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.shopSwiper', 1, 10, 3000, 1, 2, 3);
    this.swiperService.initSwiper('.SwiperInsta', 1, 10, 3000, 1, 2, 3);
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      this.modalInstance = new Modal(modalElement);
    }
  }

  modalInstance!: Modal;

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }
}
