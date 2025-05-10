import { Component } from '@angular/core';
import { HeaderElectricComponent } from "../../../Component/Header/header-electric/header-electric.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-electric-vertical',
    imports: [RouterLink, CommonModule, HeaderElectricComponent, CommonModule, ShippingComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './home-electric-vertical.component.html',
    styleUrl: './home-electric-vertical.component.scss'
})
export class HomeElectricVerticalComponent {
  products = [
    {
      name: 'Ysamsung Camera',
      price: 25.00,
      oldPrice: 35.00,
      isHovered: false,
      imageUrl: 'assets/images/home-electronic/pr-01.jpg',
      hoverImageUrl: 'assets/images/home-electronic/pr-02.jpg',
    },
    {
      name: 'Beats Solo3 Wireless',
      price: 35.00,
      isHovered: false,
      imageUrl: 'assets/images/home-electronic/pr-03.jpg',
      hoverImageUrl: 'assets/images/home-electronic/pr-04.jpg',
    },
    {
      name: 'Lomo Sanremo Edition',
      price: 35.00,
      isHovered: false,
      imageUrl: 'assets/images/home-electronic/pr-05.jpg',
      hoverImageUrl: 'assets/images/home-electronic/pr-06.jpg',
    },
    {
      name: 'Ygoogle Speaker',
      price: 65.00,
      isHovered: false,
      imageUrl: 'assets/images/home-electronic/pr-07.jpg',
      hoverImageUrl: 'assets/images/home-electronic/pr-08.jpg',
    },
    {
      name: 'Ybeoplay H9i',
      price: 55.00,
      isHovered: false,
      imageUrl: 'assets/images/home-decor-2/pr-14.jpg',
      hoverImageUrl: 'assets/images/home-decor-2/pr-15.jpg',
    },
    {
      name: 'Some Other Product',
      price: 40.00,
      isHovered: false,
      imageUrl: 'assets/images/home-decor-2/pr-16.jpg',
      hoverImageUrl: 'assets/images/home-decor-2/pr-17.jpg',
    },
    {
      name: 'Ybeoplay H9i',
      price: 55.00,
      isHovered: false,
      imageUrl: 'assets/images/home-decor-2/pr-14.jpg',
      hoverImageUrl: 'assets/images/home-decor-2/pr-15.jpg',
    },
    {
      name: 'Some Other Product',
      price: 40.00,
      isHovered: false,
      imageUrl: 'assets/images/home-decor-2/pr-16.jpg',
      hoverImageUrl: 'assets/images/home-decor-2/pr-17.jpg',
    }
  ];
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.verticalSwiper', 1, 0, 3000, 1, 2, 3);
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