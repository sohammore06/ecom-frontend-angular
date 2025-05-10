import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-blog-post-with-instagram-shop',
    imports: [TopBannerComponent, HeaderComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './blog-post-with-instagram-shop.component.html',
    styleUrl: './blog-post-with-instagram-shop.component.scss'
})
export class BlogPostWithInstagramShopComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.instagramSwiper', 1, 0, 3000, 1, 2, 4);
    this.swiperService.initSwiper('.shopSwiper', 1, 0, 3000, 1, 2, 3);
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
