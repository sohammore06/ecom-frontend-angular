import { Component, Renderer2 } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FooterFlowerComponent } from "../../../Component/Footer/footer-flower/footer-flower.component";
import { HeaderFlowerComponent } from "../../../Component/Header/header-flower/header-flower.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-flower',
    imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, ShippingComponent, CommonModule, FooterFlowerComponent, HeaderFlowerComponent, TopBannerComponent],
    templateUrl: './home-flower.component.html',
    styleUrl: './home-flower.component.scss'
})
export class HomeFlowerComponent {
  constructor(private renderer: Renderer2, private swiperService: SwiperService) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'font-quicksand');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'font-quicksand');
  }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    this.swiperService.initSwiper('.kalles-flower', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.flower-insta', 1, 0, 3000, 2, 4, 6);
    this.swiperService.initSwiper('.flowerSwiper', 1, 20, 3000, 1, 2, 3);
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
      imageUrl: 'assets/images/home-flower/pr-trending-01.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-02.png',
      title: 'Regular Succulent Shebang',
      price: 125,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-03.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-04.png',
      title: 'Shade Of Green',
      price: 199,
      salePrice: 285,
      discount: '-31%',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-05.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-06.png',
      title: 'Seasonal Arrangement',
      price: 95,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-07.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-08.png',
      title: 'Seasonal Hobnail Arrangement',
      price: 145,
      salePrice: null,
      discount: 'Sold Out',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-09.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-10.png',
      title: 'Floral Garden Arrangement',
      price: 195,
      salePrice: null,
      discount: 'Sold Out',
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-11.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-12.png',
      title: 'Boho Garden Arrangement',
      price: 195,
      salePrice: null,
      discount: null,
      isHovered: false
    }
  ];
  products2 = [
    {
      imageUrl: 'assets/images/home-flower/pr-flw-01.png',
      hoverImageUrl: 'assets/images/home-flower/pr-flw-02.png',
      title: 'Kalles Medium Arrangement',
      price: 295,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-01.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-02.png',
      title: 'Regular Succulent Shebang',
      price: 125,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-flw-05.png',
      hoverImageUrl: 'assets/images/home-flower/pr-flw-06.png',
      title: 'Regular Succulent Shebang',
      price: 335,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-05.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-06.png',
      title: 'Seasonal Arrangement',
      price: 95,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-flw-09.png',
      hoverImageUrl: 'assets/images/home-flower/pr-flw-10.png',
      title: 'Lovely Lavender Gift Box',
      price: 295,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-flw-12.png',
      hoverImageUrl: 'assets/images/home-flower/pr-flw-12.png',
      title: 'Botanical Crowns',
      price: 25,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-trending-09.png',
      hoverImageUrl: 'assets/images/home-flower/pr-trending-10.png',
      title: 'Floral Garden Arrangement',
      price: 195,
      salePrice: null,
      discount: null,
      isHovered: false
    },
    {
      imageUrl: 'assets/images/home-flower/pr-17.png',
      hoverImageUrl: 'assets/images/home-flower/pr-18.png',
      title: 'Floral Crowns',
      price: 28,
      salePrice: null,
      discount: null,
      isHovered: false
    }
  ];

}
