import { Component } from '@angular/core';
import { FooterTrendComponent } from "../../../Component/Footer/footer-trend/footer-trend.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { HeaderFashionTrendComponent } from "../../../Component/Header/header-fashion-trend/header-fashion-trend.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-fashion-trend',
    imports: [RouterLink, CommonModule, FooterTrendComponent, CommonModule, PopupComponent, CardModelComponent, HeaderFashionTrendComponent],
    templateUrl: './home-fashion-trend.component.html',
    styleUrl: './home-fashion-trend.component.scss'
})
export class HomeFashionTrendComponent {
  products = [
    {
      name: 'Tbar Collab Movie And Tv T-Shirt',
      imageUrl: 'assets/images/home-fashion-trend/pr-26.jpg',
      isHovered: false,
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-26.jpg',
      price: '$51.00'
    },
    {
      name: 'Graduate Tee',
      imageUrl: 'assets/images/home-fashion-trend/pr-27.jpg',
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-28.jpg',
      price: '$54.00',
      isHovered: false,
      discountLabel: 'Hot',
      discountClass: 'bg-danger'
    },
    {
      name: 'Festival Shirt Young',
      isHovered: false,
      imageUrl: 'assets/images/home-fashion-trend/pr-17.jpg',
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-18.jpg',
      price: '$66.00 - $86.00',
      discountLabel: 'New',
      discountClass: 'bg-success',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-fashion-trend/pr-17.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-fashion-trend/pr-18.jpg' }
      ]
    },
    {
      name: 'Tbar 3/4 Baseball Tee',
      isHovered: false,
      imageUrl: 'assets/images/home-fashion-trend/pr-20.jpg',
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-21.jpg',
      price: '$44.00'
    },
    {
      name: 'Drop Shoulder Pullover Fleece',
      imageUrl: 'assets/images/home-fashion-trend/pr-22.jpg',
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-23.jpg',
      price: '$54.00',
      originalPrice: '$60.00',
      isHovered: false,
      discountLabel: '-10%',
      discountClass: 'bg-danger'
    },
    {
      name: 'Festival Shirt Young',
      isHovered: false,
      imageUrl: 'assets/images/home-fashion-trend/pr-17.jpg',
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-18.jpg',
      price: '$66.00 - $86.00',
      discountLabel: 'New',
      discountClass: 'bg-success',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-fashion-trend/pr-17.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-fashion-trend/pr-18.jpg' }
      ]
    },
    {
      name: 'Tbar 3/4 Baseball Tee',
      isHovered: false,
      imageUrl: 'assets/images/home-fashion-trend/pr-20.jpg',
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-21.jpg',
      price: '$44.00'
    },
    {
      name: 'Drop Shoulder Pullover Fleece',
      imageUrl: 'assets/images/home-fashion-trend/pr-22.jpg',
      hoverImageUrl: 'assets/images/home-fashion-trend/pr-23.jpg',
      price: '$54.00',
      originalPrice: '$60.00',
      isHovered: false,
      discountLabel: '-10%',
      discountClass: 'bg-danger'
    },
  ];
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.TrendSwiper', 1, 0, 3000, 1, 2, 3);
    this.swiperService.initSwiper('.fashionSwiper', 1, 0, 3000, 2, 4, 6);
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
  instaImages = [
    'assets/images/home-fashion-trend/inst-01.jpg',
    'assets/images/home-fashion-trend/inst-02.jpg',
    'assets/images/home-fashion-trend/inst-03.jpg',
    'assets/images/home-fashion-trend/inst-03.jpg',
    'assets/images/home-fashion-trend/inst-04.jpg',
    'assets/images/home-fashion-trend/inst-05.jpg',
    'assets/images/home-fashion-trend/inst-06.jpg',
    'assets/images/home-fashion-trend/inst-07.jpg',
    'assets/images/home-fashion-trend/inst-08.jpg'
  ];

}
