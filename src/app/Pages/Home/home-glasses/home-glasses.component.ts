import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterDarkComponent } from "../../../Component/Footer/footer-dark/footer-dark.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderGlassesComponent } from "../../../Component/Header/header-glasses/header-glasses.component";
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-glasses',
    imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, FooterDarkComponent, TopBannerComponent, CommonModule, HeaderGlassesComponent],
    templateUrl: './home-glasses.component.html',
    styleUrl: './home-glasses.component.scss'
})
export class HomeGlassesComponent {
  ngOnInit(): void {
    document.body.classList.add('font-raleway');
    this.swiperService.initSwiper('.glassesSwiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.glass2Swiper', 1, 20, 3000, 1, 2, 3);
  }

  ngOnDestroy(): void {
    document.body.classList.remove('font-raleway');
  }

  constructor(private swiperService: SwiperService) { }

  products = [
    {
      id: 1,
      name: 'Vintage Aviator Sunglasses',
      imageUrl: 'assets/images/home-glasses/pr-14.jpg',
      hoverImage: 'assets/images/home-glasses/pr-06.jpg',
      price: 155.00,
      isHovered: false
    },
    {
      id: 2,
      name: 'Miu Miu/Core Collection MU 08RS',
      imageUrl: 'assets/images/home-glasses/pr-09.jpg',
      hoverImage: 'assets/images/home-glasses/pr-10.jpg',
      price: 450.00,
      isHovered: false
    },
    {
      id: 3,
      name: 'Miu Miu/Core Collection MU 59US',
      imageUrl: 'assets/images/home-glasses/pr-03.jpg',
      hoverImage: 'assets/images/home-glasses/pr-04.jpg',
      price: 388.00,
      isHovered: false
    },
    {
      id: 4,
      name: 'Ray-ban/Hexagonal Flat Lenses',
      imageUrl: 'assets/images/home-glasses/pr-05.jpg',
      hoverImage: 'assets/images/home-glasses/pr-06.jpg',
      price: 205.00,
      isHovered: false,
      priceRange: '$205.00 - $259.00',
    },
  ];
  products2 = [
    {
      imageUrl: 'assets/images/home-glasses/pr-06.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-06.jpg',
      title: 'Vintage Aviator Sunglasses',
      price: '$155.00',
      isHovered: false,
      quickViewUrl: '#exampleModal',
      quickShopUrl: '#cardModal'
    },
    {
      imageUrl: 'assets/images/home-glasses/pr-05.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-06.jpg',
      title: 'Ray-ban/Hexagonal Flat Lenses',
      isHovered: false,
      price: '$205.00 - $259.00',
      quickViewUrl: '#exampleModal',
      quickShopUrl: '#cardModal'
    },
    {
      imageUrl: 'assets/images/home-glasses/pr-07.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-08.jpg',
      isHovered: false,
      title: 'Ray-ban Gold Flat Lenses',
      price: '$205.00',
      quickViewUrl: '#exampleModal',
      quickShopUrl: '#cardModal'
    },
    {
      imageUrl: 'assets/images/home-glasses/pr-15.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-16.jpg',
      title: 'Ray-Ban/SQUARE II',
      isHovered: false,
      price: '$320.00',
      quickViewUrl: '#exampleModal',
      quickShopUrl: '#cardModal'
    }
  ];
  products3 = [
    {
      imageUrl: 'assets/images/home-glasses/pr-01.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-02.jpg',
      name: 'Miu Miu/NOIR Glasses',
      isHovered: false,
      price: '$205.00',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal'
    },
    {
      imageUrl: 'assets/images/home-glasses/pr-03.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-04.jpg',
      name: 'Miu Miu/Core Collection MU 59US',
      isHovered: false,
      price: '$388.00',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal'
    },
    {
      imageUrl: 'assets/images/home-glasses/pr-05.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-06.jpg',
      name: 'Ray-ban/Hexagonal Flat Lenses',
      isHovered: false,
      price: '$205.00 - $259.00',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal'
    },
    {
      imageUrl: 'assets/images/home-glasses/pr-07.jpg',
      hoverImageUrl: 'assets/images/home-glasses/pr-08.jpg',
      name: 'Ray-ban Gold Flat Lenses',
      isHovered: false,
      price: '$205.00',
      quickViewLink: '#exampleModal',
      quickShopLink: '#cardModal'
    }
  ];
  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
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