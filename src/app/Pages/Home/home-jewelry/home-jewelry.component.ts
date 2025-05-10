import { Component } from '@angular/core';
import { HeaderJewelryComponent } from "../../../Component/Header/header-jewelry/header-jewelry.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-jewelry',
  imports: [RouterLink, CommonModule, HeaderJewelryComponent, CommonModule, PopupComponent, FooterComponent, CardModelComponent],
  templateUrl: './home-jewelry.component.html',
  styleUrl: './home-jewelry.component.scss'
})
export class HomeJewelryComponent {

  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    this.swiperService.initSwiper('.jewelrySwiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.blogSwiper', 1, 0, 3000, 1, 2, 3);
    this.swiperService.initSwiper('.jewelry2Swiper', 1, 20, 3000, 1, 2, 3);
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
  products = [
    {
      name: 'Glamira - Siplora Ring',
      price: '$4,800.00',
      imageUrl: 'assets/images/home-jewelry/pr-15.jpg',
      hoverImageUrl: 'assets/images/home-jewelry/pr-16.jpg',
      isHovered: false,
      saleTag: 'New'
    },
    {
      name: 'Chain Bertha Necklace',
      price: '$1,225.00',
      imageUrl: 'assets/images/home-jewelry/pr-17.jpg',
      hoverImageUrl: 'assets/images/home-jewelry/pr-18.jpg',
      isHovered: false
    },
    {
      name: 'Brigida Diamond Ring',
      price: '$2,395.00',
      imageUrl: 'assets/images/home-jewelry/pr-19.jpg',
      hoverImageUrl: 'assets/images/home-jewelry/pr-20.jpg',
      isHovered: false,
      saleTag: 'Hot'
    },
    {
      name: 'Acennan Ruby Earrings',
      price: '$899.00 - $905.00',
      imageUrl: 'assets/images/home-jewelry/pr-21.jpg',
      hoverImageUrl: 'assets/images/home-jewelry/pr-22.jpg',
      isHovered: false
    },
    {
      name: 'Chain Bertha Necklace',
      price: '$1,225.00',
      imageUrl: 'assets/images/home-jewelry/pr-17.jpg',
      hoverImageUrl: 'assets/images/home-jewelry/pr-18.jpg',
      isHovered: false
    },
    {
      name: 'Brigida Diamond Ring',
      price: '$2,395.00',
      imageUrl: 'assets/images/home-jewelry/pr-19.jpg',
      hoverImageUrl: 'assets/images/home-jewelry/pr-20.jpg',
      isHovered: false,
      saleTag: 'Hot'
    },
    {
      name: 'Acennan Ruby Earrings',
      price: '$899.00 - $905.00',
      imageUrl: 'assets/images/home-jewelry/pr-21.jpg',
      hoverImageUrl: 'assets/images/home-jewelry/pr-22.jpg',
      isHovered: false
    }
  ];

  products2 = [
    {
      name: 'Patrizia Heart Earrings',
      price: '$1,245.00',
      images: ['assets/images/home-jewelry/pr-41.jpg', 'assets/images/home-jewelry/pr-42.jpg'],
      colorVariants: ['assets/images/home-jewelry/pr-41.jpg', 'assets/images/home-jewelry/pr-42.jpg', 'assets/images/home-jewelry/pr-57.jpg', 'assets/images/home-jewelry/pr-58.jpg'],
      detailLink: 'product-detail-layout-01'
    },
    {
      name: 'Swarovski Gaby Ring',
      price: '$309.00',
      images: ['assets/images/home-jewelry/pr-43.jpg', 'assets/images/home-jewelry/pr-44.jpg'],
      colorVariants: ['assets/images/home-jewelry/pr-43.jpg', 'assets/images/home-jewelry/pr-44.jpg', 'assets/images/home-jewelry/pr-59.jpg'],
      detailLink: 'product-detail-layout-01'
    },
    {
      name: 'Arlean Earrings',
      price: '$899.00 - $935.00',
      images: ['assets/images/home-jewelry/pr-45.jpg', 'assets/images/home-jewelry/pr-46.jpg'],
      colorVariants: ['assets/images/home-jewelry/pr-45.jpg', 'assets/images/home-jewelry/pr-46.jpg'],
      detailLink: 'product-detail-layout-01'
    },
    {
      name: 'Glamira Loberta Ring',
      price: '$3,699.00',
      originalPrice: '$4,200.00',
      images: ['assets/images/home-jewelry/pr-47.jpg', 'assets/images/home-jewelry/pr-48.jpg'],
      colorVariants: ['assets/images/home-jewelry/pr-47.jpg', 'assets/images/home-jewelry/pr-48.jpg', 'assets/images/home-jewelry/pr-60.jpg', 'assets/images/home-jewelry/pr-61.jpg', 'assets/images/home-jewelry/pr-62.jpg'],
      detailLink: 'product-detail-layout-01',
      discount: '-12%'
    }
  ];

  // Track image on hover
  hoveredImage: { [key: number]: boolean } = {};

  setHovered(index: number, value: boolean) {
    this.hoveredImage[index] = value;
  }

}
