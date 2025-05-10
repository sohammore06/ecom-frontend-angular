import { Component } from '@angular/core';
import { HeaderDecor2Component } from "../../../Component/Header/header-decor2/header-decor2.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FooterDecor2Component } from "../../../Component/Footer/footer-decor2/footer-decor2.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-decor2',
    imports: [RouterLink, CommonModule, HeaderDecor2Component, CommonModule, ShippingComponent, FooterDecor2Component, PopupComponent, CardModelComponent],
    templateUrl: './home-decor2.component.html',
    styleUrl: './home-decor2.component.scss'
})
export class HomeDecor2Component {
  products = [
    {
      imageUrl: 'assets/images/home-decor/pr-09.jpg',
      hoverImage: 'assets/images/home-decor/pr-10.jpg',
      title: 'form egg slicer',
      price: 35,
      isHovered: false,
      salePrice: null
    },
    {
      imageUrl: 'assets/images/home-decor/pr-01.jpg',
      hoverImage: 'assets/images/home-decor/pr-02.jpg',
      title: 'cymbal pendant',
      price: 35,
      isHovered: false,
      salePrice: 25
    },
    {
      imageUrl: 'assets/images/home-decor/pr-03.jpg',
      hoverImage: 'assets/images/home-decor/pr-04.jpg',
      title: 'Chair Wood Legs',
      price: 30,
      isHovered: false,
      salePrice: null
    },
    {
      imageUrl: 'assets/images/home-decor/pr-05.jpg',
      hoverImage: 'assets/images/home-decor/pr-06.jpg',
      title: 'light oil lamp',
      price: 65,
      isHovered: false,
      salePrice: null
    },
    {
      imageUrl: 'assets/images/home-decor/pr-07.jpg',
      hoverImage: 'assets/images/home-decor/pr-08.jpg',
      title: 'Line Cocktail Shaker',
      price: 65,
      isHovered: false,
      salePrice: null
    },
    {
      imageUrl: 'assets/images/home-decor/pr-11.jpg',
      hoverImage: 'assets/images/home-decor/pr-12.jpg',
      title: 'Piep Show',
      price: 15,
      isHovered: false,
      salePrice: null
    }, {
      "imageUrl": "assets/images/home-decor/pr-13.jpg",
      "hoverImage": "assets/images/home-decor/pr-14.jpg",
      "title": "Herit Chair",
      "price": 55,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-15.jpg",
      "hoverImage": "assets/images/home-decor/pr-16.jpg",
      "title": "buddy table lamp",
      "price": 35,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-17.jpg",
      "hoverImage": "assets/images/home-decor/pr-18.jpg",
      "title": "picto wall clock",
      "price": 15,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-19.jpg",
      "hoverImage": "assets/images/home-decor/pr-20.jpg",
      "title": "brush set small",
      "price": 65,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-21.jpg",
      "hoverImage": "assets/images/home-decor/pr-22.jpg",
      "title": "cru thermos jug",
      "price": 45,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-23.jpg",
      "hoverImage": "assets/images/home-decor/pr-24.jpg",
      "title": "urkiola bowl",
      "price": 85,
      isHovered: false,
      "salePrice": null
    }
  ];

  products2 = [
    {
      "imageUrl": "assets/images/home-decor/pr-09.jpg",
      "hoverImage": "assets/images/home-decor/pr-10.jpg",
      "title": "form egg slicer",
      "price": 35.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-01.jpg",
      "hoverImage": "assets/images/home-decor/pr-02.jpg",
      "title": "cymbal pendant",
      "price": 35.00,
      isHovered: false,
      "salePrice": 25.00
    },
    {
      "imageUrl": "assets/images/home-decor/pr-03.jpg",
      "hoverImage": "assets/images/home-decor/pr-04.jpg",
      "title": "Chair Wood Legs",
      "price": 30.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-05.jpg",
      "hoverImage": "assets/images/home-decor/pr-06.jpg",
      "title": "light oil lamp",
      "price": 65.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-07.jpg",
      "hoverImage": "assets/images/home-decor/pr-08.jpg",
      "title": "Line Cocktail Shaker",
      "price": 65.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-11.jpg",
      "hoverImage": "assets/images/home-decor/pr-12.jpg",
      "title": "Piep Show",
      "price": 15.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-13.jpg",
      "hoverImage": "assets/images/home-decor/pr-14.jpg",
      "title": "Herit Chair",
      "price": 55.00,
      isHovered: false,
      "salePrice": null
    }, {
      "imageUrl": "assets/images/home-decor/pr-15.jpg",
      "hoverImage": "assets/images/home-decor/pr-16.jpg",
      "title": "buddy table lamp",
      "price": 35.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-17.jpg",
      "hoverImage": "assets/images/home-decor/pr-18.jpg",
      "title": "picto wall clock",
      "price": 15.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-19.jpg",
      "hoverImage": "assets/images/home-decor/pr-20.jpg",
      "title": "brush set small",
      "price": 65.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-21.jpg",
      "hoverImage": "assets/images/home-decor/pr-22.jpg",
      "title": "cru thermos jug",
      "price": 45.00,
      isHovered: false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-23.jpg",
      "hoverImage": "assets/images/home-decor/pr-24.jpg",
      "title": "urkiola bowl",
      "price": 85.00,
      isHovered: false,
      "salePrice": null
    }
  ];

  products3 = [
    {
      "imageUrl": "assets/images/home-decor/pr-09.jpg",
      "hoverImage": "assets/images/home-decor/pr-10.jpg",
      "title": "form egg slicer",
      "price": 35.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-01.jpg",
      "hoverImage": "assets/images/home-decor/pr-02.jpg",
      "title": "cymbal pendant",
      "price": 35.00,
      "isHovered": false,
      "salePrice": 25.00
    },
    {
      "imageUrl": "assets/images/home-decor/pr-03.jpg",
      "hoverImage": "assets/images/home-decor/pr-04.jpg",
      "title": "Chair Wood Legs",
      "price": 30.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-05.jpg",
      "hoverImage": "assets/images/home-decor/pr-06.jpg",
      "title": "light oil lamp",
      "price": 65.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-07.jpg",
      "hoverImage": "assets/images/home-decor/pr-08.jpg",
      "title": "Line Cocktail Shaker",
      "price": 65.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-11.jpg",
      "hoverImage": "assets/images/home-decor/pr-12.jpg",
      "title": "Piep Show",
      "price": 15.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-13.jpg",
      "hoverImage": "assets/images/home-decor/pr-14.jpg",
      "title": "Herit Chair",
      "price": 55.00,
      "isHovered": false,
      "salePrice": null
    }, {
      "imageUrl": "assets/images/home-decor/pr-15.jpg",
      "hoverImage": "assets/images/home-decor/pr-16.jpg",
      "title": "buddy table lamp",
      "price": 35.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-17.jpg",
      "hoverImage": "assets/images/home-decor/pr-18.jpg",
      "title": "picto wall clock",
      "price": 15.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-19.jpg",
      "hoverImage": "assets/images/home-decor/pr-20.jpg",
      "title": "brush set small",
      "price": 65.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-21.jpg",
      "hoverImage": "assets/images/home-decor/pr-22.jpg",
      "title": "cru thermos jug",
      "price": 45.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-23.jpg",
      "hoverImage": "assets/images/home-decor/pr-24.jpg",
      "title": "urkiola bowl",
      "price": 85.00,
      "isHovered": false,
      "salePrice": null
    }
  ];

  products4 = [
    {
      "imageUrl": "assets/images/home-decor/pr-09.jpg",
      "hoverImage": "assets/images/home-decor/pr-10.jpg",
      "title": "form egg slicer",
      "price": 35.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-01.jpg",
      "hoverImage": "assets/images/home-decor/pr-02.jpg",
      "title": "cymbal pendant",
      "price": 35.00,
      "isHovered": false,
      "salePrice": 25.00
    },
    {
      "imageUrl": "assets/images/home-decor/pr-03.jpg",
      "hoverImage": "assets/images/home-decor/pr-04.jpg",
      "title": "Chair Wood Legs",
      "price": 30.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-05.jpg",
      "hoverImage": "assets/images/home-decor/pr-06.jpg",
      "title": "light oil lamp",
      "price": 65.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-07.jpg",
      "hoverImage": "assets/images/home-decor/pr-08.jpg",
      "title": "Line Cocktail Shaker",
      "price": 65.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-11.jpg",
      "hoverImage": "assets/images/home-decor/pr-12.jpg",
      "title": "Piep Show",
      "price": 15.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-13.jpg",
      "hoverImage": "assets/images/home-decor/pr-14.jpg",
      "title": "Herit Chair",
      "price": 55.00,
      "isHovered": false,
      "salePrice": null
    }, {
      "imageUrl": "assets/images/home-decor/pr-15.jpg",
      "hoverImage": "assets/images/home-decor/pr-16.jpg",
      "title": "buddy table lamp",
      "price": 35.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-17.jpg",
      "hoverImage": "assets/images/home-decor/pr-18.jpg",
      "title": "picto wall clock",
      "price": 15.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-19.jpg",
      "hoverImage": "assets/images/home-decor/pr-20.jpg",
      "title": "brush set small",
      "price": 65.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-21.jpg",
      "hoverImage": "assets/images/home-decor/pr-22.jpg",
      "title": "cru thermos jug",
      "price": 45.00,
      "isHovered": false,
      "salePrice": null
    },
    {
      "imageUrl": "assets/images/home-decor/pr-23.jpg",
      "hoverImage": "assets/images/home-decor/pr-24.jpg",
      "title": "urkiola bowl",
      "price": 85.00,
      "isHovered": false,
      "salePrice": null
    }
  ];
  constructor(private swiperService: SwiperService) { }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.DecorSwiper', 1, 0, 3000, 1, 2, 3);
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