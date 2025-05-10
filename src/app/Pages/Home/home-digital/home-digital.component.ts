import { Component } from '@angular/core';
import { FooterDigitalComponent } from "../../../Component/Footer/footer-digital/footer-digital.component";
import { HeaderDigitalComponent } from "../../../Component/Header/header-digital/header-digital.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-digital',
  imports: [RouterLink, CommonModule, FooterDigitalComponent, CommonModule, HeaderDigitalComponent, CardModelComponent, PopupComponent],
  templateUrl: './home-digital.component.html',
  styleUrl: './home-digital.component.scss'
})
export class HomeDigitalComponent {
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.digitalSwiper', 1, 0, 3000, 1, 1, 1);
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

  slides = [
    {
      title: 'SUMMER 2024',
      heading: 'Meet Galaxy S20, S20+',
      subheading: 'This is the phone that will change photography',
      imageUrl: 'assets/images/home-digital/main-slide.jpg',
    },
    {
      title: 'SUMMER 2024',
      heading: 'Meet Galaxy S20, S20+',
      subheading: 'This is the phone that will change photography',
      imageUrl: 'assets/images/home-digital/main-slide.jpg',
    }
  ];

  banners = [
    {
      type: 'image',
      imageUrl: 'assets/images/home-digital/banner-countdown-left.jpg',
      title: 'WORK AT HOME SALE',
      discount: '70%',
      buttonText: 'Get it Now',
      buttonLink: '#!',
      position: 'text-end'
    },
    {
      type: 'product',
      imageUrl: 'assets/images/home-digital/pr-17.jpg',
      productName: 'La Bohème Rose Gold',
      originalPrice: '$60.00',
      discountedPrice: '$45.00',
      colorVariants: [
        { imageUrl: 'assets/images/home-classic/pr-big-24.jpg', colorClass: 'bg_color_pink' },
        { imageUrl: 'assets/images/home-classic/pr-big-25.jpg', colorClass: 'bg-dark' }
      ],
      countdownDate: '10-10-2028'
    },
    {
      type: 'image',
      imageUrl: 'assets/images/home-digital/banner-countdown-right.jpg',
      title: 'SUMMER SALE',
      discount: 'UP TO 30%',
      buttonText: 'Shop Now',
      buttonLink: '#!',
      position: 'text-center'
    }
  ];

  products = [
    {
      imageUrl: 'assets/images/home-digital/pr-01.jpg',
      hoverImage: 'assets/images/home-digital/pr-02.jpg',
      name: 'Video & Air Quality Monitor',
      oldPrice: 312,
      newPrice: 239,
      discount: 24,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      name: 'X-Star Premium Drone with 4K Camera',
      oldPrice: null,
      newPrice: 450,
      discount: null,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-digital/pr-05.jpg',
      hoverImage: 'assets/images/home-digital/pr-06.jpg',
      name: 'Digital 20.1 4K Video Camera',
      oldPrice: 440,
      newPrice: 400,
      isHovered: false,
      discount: 10,
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      name: 'Wireless Smart Home Speaker',
      oldPrice: 199,
      newPrice: 149,
      discount: null,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-digital/pr-09.jpg',
      hoverImage: 'assets/images/home-digital/pr-10.jpg',
      name: 'Smart WiFi Security Camera',
      oldPrice: 300,
      newPrice: 270,
      isHovered: false,
      discount: null,
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-digital/pr-11.jpg',
      hoverImage: 'assets/images/home-digital/pr-12.jpg',
      name: 'Bluetooth Noise-Canceling Headphones',
      oldPrice: 250,
      newPrice: 200,
      isHovered: false,
      discount: 20,
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-digital/pr-13.jpg',
      hoverImage: 'assets/images/home-digital/pr-14.jpg',
      name: 'Smart Light Bulb - Multicolor',
      oldPrice: 50,
      newPrice: 35,
      isHovered: false,
      discount: null,
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-digital/pr-15.jpg',
      hoverImage: 'assets/images/home-digital/pr-16.jpg',
      name: '4K Ultra HD Smart TV',
      oldPrice: 900,
      newPrice: 750,
      isHovered: false,
      discount: 15,
      link: 'product-detail-layout-01'
    }
  ];

  products2 = [
    {
      name: 'Smart Watches 4',
      imageUrl: 'assets/images/home-digital/pr-11.jpg',
      hoverImage: 'assets/images/home-digital/pr-12.jpg',
      price: 320,
      oldPrice: 350,
      isHovered: false,
      discount: '-9%',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Wireless Multiroom Speaker',
      imageUrl: 'assets/images/home-digital/pr-09.jpg',
      hoverImage: 'assets/images/home-digital/pr-10.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    }
  ];

  products3 = [
    {
      name: 'Smart Watches 4',
      imageUrl: 'assets/images/home-digital/pr-11.jpg',
      hoverImage: 'assets/images/home-digital/pr-12.jpg',
      price: 320,
      oldPrice: 350,
      isHovered: false,
      discount: '-9%',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Wireless Multiroom Speaker',
      imageUrl: 'assets/images/home-digital/pr-09.jpg',
      hoverImage: 'assets/images/home-digital/pr-10.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    }
  ];

  products4 = [
    {
      name: 'Smart Watches 4',
      imageUrl: 'assets/images/home-digital/pr-11.jpg',
      hoverImage: 'assets/images/home-digital/pr-12.jpg',
      price: 320,
      oldPrice: 350,
      isHovered: false,
      discount: '-9%',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Wireless Multiroom Speaker',
      imageUrl: 'assets/images/home-digital/pr-09.jpg',
      hoverImage: 'assets/images/home-digital/pr-10.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    }
  ];

  products5 = [
    {
      name: 'Smart Watches 4',
      imageUrl: 'assets/images/home-digital/pr-11.jpg',
      hoverImage: 'assets/images/home-digital/pr-12.jpg',
      price: 320,
      oldPrice: 350,
      isHovered: false,
      discount: '-9%',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Wireless Multiroom Speaker',
      imageUrl: 'assets/images/home-digital/pr-09.jpg',
      hoverImage: 'assets/images/home-digital/pr-10.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'ZenBook 3 Ultrabook 8GB 512SSD',
      imageUrl: 'assets/images/home-digital/pr-19.jpg',
      hoverImage: 'assets/images/home-digital/pr-20.jpg',
      price: 250,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'X-Star Premium Drone with 4K Camera',
      imageUrl: 'assets/images/home-digital/pr-03.jpg',
      hoverImage: 'assets/images/home-digital/pr-04.jpg',
      price: 450,
      isHovered: false,
      link: 'product-detail-layout-01'
    },
    {
      name: 'On-ear Wireless NXTG',
      imageUrl: 'assets/images/home-digital/pr-07.jpg',
      hoverImage: 'assets/images/home-digital/pr-08.jpg',
      price: 225,
      oldPrice: 312,
      discount: '-28%',
      isHovered: false,
      link: 'product-detail-layout-01'
    }
  ];
}
