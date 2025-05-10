import { Component, ElementRef } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { OurProductComponent } from "../../../Component/our-product/our-product.component";
import { TrendingComponent } from "../../../Component/trending/trending.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { Header2Component } from "../../../Component/Header/header2/header2.component";
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-lookbook',
    imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, CommonModule, FooterComponent, ShippingComponent, FollowInstagramComponent, LatestBlogComponent, OurProductComponent, TrendingComponent, TopBannerComponent, Header2Component],
    templateUrl: './home-lookbook.component.html',
    styleUrl: './home-lookbook.component.scss'
})
export class HomeLookbookComponent {
  slides = [
    {
      imageUrl: 'assets/images/home-lookbook/slide-01.jpg',
      pins: [
        { id: 'pinType1', positionClass: 'position-01', colorClass: 'bg-primary' },
        { id: 'pinType2', positionClass: 'position-02', colorClass: 'bg-primary' },
        { id: 'pinType3', positionClass: 'position-03', colorClass: 'bg_color_red' },
        { id: 'pinType4', positionClass: 'position-04', colorClass: 'bg_color_red' },
        { id: 'pinType5', positionClass: 'position-05', colorClass: 'bg_color_red' }
      ]
    },
    {
      imageUrl: 'assets/images/home-lookbook/slide-02.jpg',
      pins: [
        { id: 'pinType6', positionClass: 'position-06', colorClass: 'bg-primary' },
        { id: 'pinType7', positionClass: 'position-07', colorClass: 'bg-primary' }
      ]
    },
    {
      imageUrl: 'assets/images/home-lookbook/slide-03.jpg',
      pins: [
        { id: 'pinType8', positionClass: 'position-08', colorClass: 'bg-primary' },
        { id: 'pinType9', positionClass: 'position-09', colorClass: 'bg-primary' }
      ]
    }
  ];

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.productSwiper', 1, 0, 3000, 2, 4, 1);
    const tooltipTriggerList: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
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
  imageUrl: string = 'assets/images/home-classic/pr-big-24.jpg';

  constructor(private elementRef: ElementRef, private swiperService: SwiperService) { }

  changeImage(newImageUrl: string) {
    this.imageUrl = newImageUrl;
  }
}
