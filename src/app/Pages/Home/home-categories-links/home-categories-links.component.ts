import { Component, ElementRef } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { OurProductComponent } from "../../../Component/our-product/our-product.component";
import { TrendingComponent } from "../../../Component/trending/trending.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-categories-links',
    imports: [RouterLink, CommonModule, CardModelComponent, CommonModule, PopupComponent, ShippingComponent, FollowInstagramComponent, LatestBlogComponent, OurProductComponent, TrendingComponent, FooterComponent, TopBannerComponent, HeaderComponent],
    templateUrl: './home-categories-links.component.html',
    styleUrl: './home-categories-links.component.scss'
})
export class HomeCategoriesLinksComponent {

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
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
  categories = [
    { title: 'Footwear', image: 'assets/images/home-categories-links/cat-bn-01.jpeg', link: 'shop' },
    { title: 'Bags', image: 'assets/images/home-categories-links/cat-bn-02.jpg', link: 'shop' },
    { title: 'Watches', image: 'assets/images/home-categories-links/cat-bn-03.jpg', link: 'shop' },
    { title: 'Caps & Hats', image: 'assets/images/home-categories-links/cat-bn-04.jpg', link: 'shop' }
  ];

}
