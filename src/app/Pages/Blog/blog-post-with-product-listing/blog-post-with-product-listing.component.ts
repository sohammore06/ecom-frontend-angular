import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-blog-post-with-product-listing',
    imports: [TopBannerComponent, HeaderComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './blog-post-with-product-listing.component.html',
    styleUrl: './blog-post-with-product-listing.component.scss'
})
export class BlogPostWithProductListingComponent {
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.productSwiper', 1, 10, 3000, 1, 2, 3);
    this.swiperService.initSwiper('.product2Swiper', 1, 10, 3000, 1, 2, 4);
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
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