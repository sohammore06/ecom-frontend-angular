import { Component, Renderer2 } from '@angular/core';
import { HeaderMedicalComponent } from "../../../Component/Header/header-medical/header-medical.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { FooterMedicalComponent } from "../../../Component/Footer/footer-medical/footer-medical.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-medical',
    imports: [RouterLink, CommonModule, HeaderMedicalComponent, FooterMedicalComponent, CommonModule, PopupComponent, CardModelComponent],
    templateUrl: './home-medical.component.html',
    styleUrl: './home-medical.component.scss'
})
export class HomeMedicalComponent {

  constructor(private renderer: Renderer2, private swiperService: SwiperService) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'wrapper_cus');
    this.renderer.addClass(document.body, 'font-open-sans');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'wrapper_cus');
    this.renderer.removeClass(document.body, 'font-open-sans');
  }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.medicalSwipar', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.medialSwiper', 1, 30, 3000, 2, 3, 5);
    this.swiperService.initSwiper('.medical2Swiper', 1, 10, 3000, 2, 3, 6);
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
  products = [
    {
      name: 'Portable Personal Compressor',
      originalPrice: 76.00,
      discountedPrice: 55.00,
      imageUrl: 'assets/images/home-medical/pr-20.jpg',
      salePercentage: 28,
      sold: 15,
      available: 0,
      imageHovered: 'assets/images/home-medical/pr-20.jpg'
    },
    {
      name: 'Disposable Hand Wash Gel',
      originalPrice: 27.00,
      discountedPrice: 20.00,
      imageUrl: 'assets/images/home-medical/pr-11.jpg',
      salePercentage: 26,
      sold: 5,
      available: 1,
      imageHovered: 'assets/images/home-medical/pr-11.jpg'
    },
    {
      name: 'Surgical Latex Gloves',
      originalPrice: 16.00,
      discountedPrice: 10.00,
      imageUrl: 'assets/images/home-medical/pr-12.jpg',
      salePercentage: 38,
      sold: 21,
      available: 9,
      imageHovered: 'assets/images/home-medical/pr-13.jpg'
    },
    {
      name: 'Manual Oxygen Device',
      originalPrice: 15.00,
      discountedPrice: 12.00,
      imageUrl: 'assets/images/home-medical/pr-14.jpg',
      salePercentage: 20,
      sold: 10,
      available: 0,
      imageHovered: 'assets/images/home-medical/pr-15.jpg'
    },
    {
      name: '12-Ply Gauze Sponges',
      originalPrice: 10.00,
      discountedPrice: 7.00,
      imageUrl: 'assets/images/home-medical/pr-16.jpg',
      salePercentage: 30,
      sold: 14,
      available: 1,
      imageHovered: 'assets/images/home-medical/pr-17.jpg'
    },
    {
      name: 'Cara Portable Air Compressor',
      originalPrice: 145.00,
      discountedPrice: 120.00,
      imageUrl: 'assets/images/home-medical/pr-18.jpg',
      salePercentage: 18,
      sold: 7,
      available: 0,
      imageHovered: 'assets/images/home-medical/pr-19.jpg'
    }
  ];

  products2 = [
    {
      name: 'Search Lab N95 Face Mask',
      image: 'assets/images/home-medical/pr-21.jpg',
      hoverImage: 'assets/images/home-medical/pr-22.jpg',
      sale: '-12%',
      oldPrice: '$25.00',
      price: '$22.00',
      isHovered: false
    },
    {
      name: 'Anti-septic Dry Hand Gel',
      image: 'assets/images/home-medical/pr-23.jpg',
      hoverImage: 'assets/images/home-medical/pr-24.jpg',
      sale: '-46%',
      oldPrice: '$35.00',
      price: '$19.00',
      isHovered: false
    },
    {
      name: 'Digital Thermometer',
      image: 'assets/images/home-medical/pr-25.jpg',
      hoverImage: 'assets/images/home-medical/pr-26.jpg',
      sale: '-19%',
      oldPrice: '$55.00',
      price: '$45.00',
      isHovered: false
    },
    {
      name: 'Anti-virus Carbon Mask',
      image: 'assets/images/home-medical/pr-27.jpg',
      hoverImage: 'assets/images/home-medical/pr-28.jpg',
      sale: null,
      oldPrice: null,
      price: '$35.00',
      isHovered: false
    },
    {
      name: 'Temperature Gun',
      image: 'assets/images/home-medical/pr-29.jpg',
      hoverImage: 'assets/images/home-medical/pr-30.jpg',
      sale: '-23%',
      oldPrice: '$45.00',
      price: '$35.00',
      isHovered: false
    },
    {
      name: 'Surgical Latex Gloves',
      image: 'assets/images/home-medical/pr-12.jpg',
      hoverImage: 'assets/images/home-medical/pr-13.jpg',
      sale: '-38%',
      oldPrice: '$16.00',
      price: '$10.00',
      isHovered: false
    },
    {
      name: 'Surgical Face Mask',
      image: 'assets/images/home-medical/pr-01.jpg',
      hoverImage: 'assets/images/home-medical/pr-02.jpg',
      sale: '-17%',
      oldPrice: '$12.00',
      price: '$10.00',
      isHovered: false
    },
    {
      name: 'Blood Pressure Monitor',
      image: 'assets/images/home-medical/pr-31.jpg',
      hoverImage: 'assets/images/home-medical/pr-31.jpg', // No hover image specified
      sale: null,
      oldPrice: null,
      price: '$121.00',
      isHovered: false
    },
    {
      name: 'Stainless Steel Kidney Tray',
      image: 'assets/images/home-medical/pr-32.jpg',
      hoverImage: 'assets/images/home-medical/pr-33.jpg',
      sale: '-40%',
      oldPrice: '$30.00',
      price: '$18.00',
      isHovered: false
    },
    {
      name: 'Hand Sanitizer',
      image: 'assets/images/home-medical/pr-34.jpg',
      hoverImage: 'assets/images/home-medical/pr-34.jpg',
      sale: null,
      oldPrice: null,
      price: '$6.00',
      isHovered: false
    }
  ];


}
