import { Component, Renderer2 } from '@angular/core';
import { FooterKidsComponent } from "../../../Component/Footer/footer-kids/footer-kids.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { HeaderKidsComponent } from "../../../Component/Header/header-kids/header-kids.component";
import { SwiperService } from '../../../Services/swiper.service';
import { CommonModule } from '@angular/common';
interface Product {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  sold: number;
  available: number;
}
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-kids',
    imports: [RouterLink, CommonModule, FooterKidsComponent, CommonModule, PopupComponent, CardModelComponent, HeaderKidsComponent],
    templateUrl: './home-kids.component.html',
    styleUrl: './home-kids.component.scss'
})
export class HomeKidsComponent {
  constructor(private renderer: Renderer2, private swiperService: SwiperService) { }

  color: string = 'Pink';

  setColor(selectedColor: string, event: Event) {
    this.color = selectedColor;
  }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-image', 'url("https://themes.the4.co/kalles-html/assets/images/home-kids/body-bg.jpg")');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }

  ngOnDestroy() {
    // Remove styles when leaving the component to prevent affecting other pages
    this.renderer.removeStyle(document.body, 'background-image');
    this.renderer.removeStyle(document.body, 'background-repeat');
    this.renderer.removeStyle(document.body, 'background-size');
    this.renderer.removeStyle(document.body, 'overflow-x');
  }

  products: Product[] = [
    {
      name: 'Glitter Pink Mini Backpack',
      price: 29.00,
      rating: 3,
      reviews: 5,
      imageUrl: 'assets/images/home-kids/pr-09.jpg',
      sold: 30,
      available: 46
    },
    {
      name: 'Low Blush Beanie',
      price: 24.00,
      rating: 3,
      reviews: 6,
      imageUrl: 'assets/images/home-kids/pr-11.jpg',
      sold: 25,
      available: 75
    },
    {
      name: 'Little Princess Rose Gold',
      price: 8.00,
      rating: 3,
      reviews: 9,
      imageUrl: 'assets/images/home-kids/pr-13.jpg',
      sold: 52,
      available: 48
    },
    {
      name: 'Striped Polo T-Shirt',
      price: 12.00,
      originalPrice: 19.99,
      rating: 3,
      reviews: 12,
      imageUrl: 'assets/images/home-kids/pr-13.jpg',
      sold: 32,
      available: 36
    }
  ];
  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.kidsSwiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initSwiper('.kids2Swiper', 1, 0, 3000, 1, 1, 1);
    this.swiperService.initThumbsSwiper('.kidsProductMain', '.kidsProductSmall');
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