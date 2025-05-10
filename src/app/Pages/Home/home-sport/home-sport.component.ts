import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderSportComponent } from "../../../Component/Header/header-sport/header-sport.component";
import { FooterSportComponent } from "../../../Component/Footer/footer-sport/footer-sport.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-sport',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, HeaderSportComponent, FooterSportComponent, PopupComponent, CardModelComponent],
    templateUrl: './home-sport.component.html',
    styleUrl: './home-sport.component.scss'
})
export class HomeSportComponent {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private swiperService: SwiperService) { }

  ngOnInit(): void {
    // Add class to <body>
    this.renderer.addClass(this.document.body, 'font-raleway');
  }

  ngOnDestroy(): void {
    // Remove class when component is destroyed
    this.renderer.removeClass(this.document.body, 'font-raleway');
  }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.sportSwiper', 1, 10, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.featuredSwiper', 1, 10, 3000, 1, 2, 4);
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
      name: 'Nike As Dri-Fit Training',
      price: '$65.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-04.jpg',
      imageHover: 'assets/images/home-sport/pr-11.jpg',
      colors: [
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-04.jpg' },
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-11.jpg' },
        { colorClass: 'bg_color_pink', imageUrl: 'assets/images/home-sport/pr-12.jpg' }
      ]
    },
    {
      name: 'Body Trimmer',
      price: '$65.00',
      oldPrice: '$99.00',
      discount: '-35%',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-08.jpg',
      imageHover: 'assets/images/home-sport/pr-07.jpg',
      colors: []
    },
    {
      name: 'NIKE Trophy Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-10.jpg',
      imageHover: 'assets/images/home-sport/pr-09.jpg',
      colors: [
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-10.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-09.jpg' }
      ]
    },
    {
      name: 'Calvin Klein Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-13.jpg',
      imageHover: 'assets/images/home-sport/pr-14.jpg',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-sport/pr-14.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-13.jpg' }
      ]
    },
    {
      name: 'Nike As Dri-Fit Training',
      price: '$65.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-04.jpg',
      imageHover: 'assets/images/home-sport/pr-11.jpg',
      colors: [
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-04.jpg' },
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-11.jpg' },
        { colorClass: 'bg_color_pink', imageUrl: 'assets/images/home-sport/pr-12.jpg' }
      ]
    },
    {
      name: 'Body Trimmer',
      price: '$65.00',
      oldPrice: '$99.00',
      discount: '-35%',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-08.jpg',
      imageHover: 'assets/images/home-sport/pr-07.jpg',
      colors: []
    },
    {
      name: 'NIKE Trophy Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-10.jpg',
      imageHover: 'assets/images/home-sport/pr-09.jpg',
      colors: [
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-10.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-09.jpg' }
      ]
    },
    {
      name: 'Calvin Klein Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-13.jpg',
      imageHover: 'assets/images/home-sport/pr-14.jpg',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-sport/pr-14.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-13.jpg' }
      ]
    }
  ];
  products3 = [
    {
      name: 'Nike As Dri-Fit Training',
      price: '$65.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-04.jpg',
      imageHover: 'assets/images/home-sport/pr-11.jpg',
      colors: [
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-04.jpg' },
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-11.jpg' },
        { colorClass: 'bg_color_pink', imageUrl: 'assets/images/home-sport/pr-12.jpg' }
      ]
    },
    {
      name: 'Body Trimmer',
      price: '$65.00',
      oldPrice: '$99.00',
      discount: '-35%',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-08.jpg',
      imageHover: 'assets/images/home-sport/pr-07.jpg',
      colors: []
    },
    {
      name: 'NIKE Trophy Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-10.jpg',
      imageHover: 'assets/images/home-sport/pr-09.jpg',
      colors: [
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-10.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-09.jpg' }
      ]
    },
    {
      name: 'Calvin Klein Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-13.jpg',
      imageHover: 'assets/images/home-sport/pr-14.jpg',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-sport/pr-14.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-13.jpg' }
      ]
    },
    {
      name: 'Nike As Dri-Fit Training',
      price: '$65.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-04.jpg',
      imageHover: 'assets/images/home-sport/pr-11.jpg',
      colors: [
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-04.jpg' },
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-11.jpg' },
        { colorClass: 'bg_color_pink', imageUrl: 'assets/images/home-sport/pr-12.jpg' }
      ]
    },
    {
      name: 'Body Trimmer',
      price: '$65.00',
      oldPrice: '$99.00',
      discount: '-35%',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-08.jpg',
      imageHover: 'assets/images/home-sport/pr-07.jpg',
      colors: []
    },
    {
      name: 'NIKE Trophy Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-10.jpg',
      imageHover: 'assets/images/home-sport/pr-09.jpg',
      colors: [
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-10.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-09.jpg' }
      ]
    },
    {
      name: 'Calvin Klein Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-13.jpg',
      imageHover: 'assets/images/home-sport/pr-14.jpg',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-sport/pr-14.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-13.jpg' }
      ]
    }
  ];
  products2 = [
    {
      name: 'Nike As Dri-Fit Training',
      price: '$65.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-04.jpg',
      imageHover: 'assets/images/home-sport/pr-11.jpg',
      colors: [
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-04.jpg' },
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-11.jpg' },
        { colorClass: 'bg_color_pink', imageUrl: 'assets/images/home-sport/pr-12.jpg' }
      ]
    },
    {
      name: 'Body Trimmer',
      price: '$65.00',
      oldPrice: '$99.00',
      discount: '-35%',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-08.jpg',
      imageHover: 'assets/images/home-sport/pr-07.jpg',
      colors: []
    },
    {
      name: 'NIKE Trophy Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-10.jpg',
      imageHover: 'assets/images/home-sport/pr-09.jpg',
      colors: [
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-10.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-09.jpg' }
      ]
    },
    {
      name: 'Calvin Klein Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-13.jpg',
      imageHover: 'assets/images/home-sport/pr-14.jpg',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-sport/pr-14.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-13.jpg' }
      ]
    },
    {
      name: 'Nike As Dri-Fit Training',
      price: '$65.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-04.jpg',
      imageHover: 'assets/images/home-sport/pr-11.jpg',
      colors: [
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-04.jpg' },
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-11.jpg' },
        { colorClass: 'bg_color_pink', imageUrl: 'assets/images/home-sport/pr-12.jpg' }
      ]
    },
    {
      name: 'Body Trimmer',
      price: '$65.00',
      oldPrice: '$99.00',
      discount: '-35%',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-08.jpg',
      imageHover: 'assets/images/home-sport/pr-07.jpg',
      colors: []
    },
    {
      name: 'NIKE Trophy Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-10.jpg',
      imageHover: 'assets/images/home-sport/pr-09.jpg',
      colors: [
        { colorClass: 'bg_color_blue', imageUrl: 'assets/images/home-sport/pr-10.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-09.jpg' }
      ]
    },
    {
      name: 'Calvin Klein Training Shorts',
      price: '$29.00',
      isHovered: false,
      imageDefault: 'assets/images/home-sport/pr-13.jpg',
      imageHover: 'assets/images/home-sport/pr-14.jpg',
      colors: [
        { colorClass: 'bg-danger', imageUrl: 'assets/images/home-sport/pr-14.jpg' },
        { colorClass: 'bg-dark', imageUrl: 'assets/images/home-sport/pr-13.jpg' }
      ]
    }
  ];
  products4 = [
    {
      name: 'Shoes huarache – TT100',
      price: '$145.00',
      isHovered: false,
      imageUrl: 'assets/images/home-sport/pr-01.jpg',
      hoverImage: 'assets/images/home-sport/pr-02.jpg',
      colors: ['bg_color_blue', 'bg_color_cyan']
    },
    {
      name: 'SwimZip Men\'s Long Sleeve Zipper',
      price: '$65.00',
      isHovered: false,
      imageUrl: 'assets/images/home-sport/pr-03.jpg',
      hoverImage: 'assets/images/home-sport/pr-04.jpg',
      colors: []
    },
    {
      name: 'Men\'s Tops Long Sleeve Shirts',
      price: '$65.00',
      oldPrice: '$99.00',
      isHovered: false,
      imageUrl: 'assets/images/home-sport/pr-05.jpg',
      hoverImage: 'assets/images/home-sport/pr-06.jpg',
      discount: '-35%',
      colors: ['bg_color_pink', 'bg-dark', 'bg_color_blue']
    },
    {
      name: 'Elip Power Max',
      price: '$35.00',
      isHovered: false,
      imageUrl: 'assets/images/home-sport/pr-07.jpg',
      hoverImage: 'assets/images/home-sport/pr-08.jpg',
      colors: []
    }
  ];

}
