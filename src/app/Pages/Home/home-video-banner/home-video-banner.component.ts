import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { Header2Component } from "../../../Component/Header/header2/header2.component";
import * as bootstrap from 'bootstrap';
import { OurProductComponent } from "../../../Component/our-product/our-product.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { TrendingComponent } from "../../../Component/trending/trending.component";
import { Modal } from 'bootstrap';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-video-banner',
    imports: [RouterLink, CommonModule, CardModelComponent, TopBannerComponent, Header2Component, OurProductComponent, LatestBlogComponent, FollowInstagramComponent, FooterComponent, PopupComponent, TrendingComponent],
    templateUrl: './home-video-banner.component.html',
    styleUrl: './home-video-banner.component.scss'
})
export class HomeVideoBannerComponent {
  @ViewChild('myVideo') video!: ElementRef<HTMLVideoElement>;

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.video.nativeElement.play().catch((error) => {
      console.log('Autoplay prevented:', error);
    });
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

  constructor(private elementRef: ElementRef) { }

  changeImage(newImageUrl: string) {
    this.imageUrl = newImageUrl;
  }

}
