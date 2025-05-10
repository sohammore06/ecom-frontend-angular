import { Component } from '@angular/core';
import { PopupComponent } from '../../Component/popup/popup.component';
import { FooterComponent } from '../../Component/Footer/footer/footer.component';
import { CardModelComponent } from '../../Component/card-model/card-model.component';
import { HeaderComponent } from '../../Component/Header/header/header.component';
import { TopBannerComponent } from '../../Component/top-banner/top-banner.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';
import { SwiperService } from '../../Services/swiper.service';

@Component({
  selector: 'app-wishlist',
  imports: [RouterLink, CommonModule, PopupComponent, CommonModule, FooterComponent, CardModelComponent, HeaderComponent, TopBannerComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  imageUrl: string = 'assets/images/megamenu/pr-11.jpg';
  products = [
    {
      id: 1,
      imageUrl: 'assets/images/products/pr-01.jpg',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      oldPrice: '',
      isNew: true,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 2,
      imageUrl: 'assets/images/megamenu/pr-11.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/megamenu/pr-11.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-35.jpg' }
      ]
    },
    {
      id: 3,
      imageUrl: 'assets/images/megamenu/pr-03.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 4,
      imageUrl: 'assets/images/products/pr-11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 5,
      imageUrl: 'assets/images/products/pr-33.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/products/pr-33.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-34.jpg' }
      ]
    },
    {
      id: 6,
      imageUrl: 'assets/images/products/pr-15.jpg',
      title: 'Mercury Tee',
      price: '$68.00',
      oldPrice: '',
      isNew: false,
      sizes: 'S, M',
      discount: false,
      colors: [
        { name: 'red', imageUrl: 'assets/images/products/pr-15.jpg' },
        { name: 'green', imageUrl: 'assets/images/products/pr-14.jpg' }
      ]
    },
    {
      id: 7,
      imageUrl: 'assets/images/megamenu/pr-05.jpg',
      title: 'Blush Beanie',
      price: '$15.00',
      oldPrice: '',
      isNew: false,
      sizes: '',
      discount: false,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/megamenu/pr-05.jpg' },
        { name: 'blue', imageUrl: 'assets/images/products/pr-31.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-32.jpg' }
      ]
    }, {
      id: 1,
      imageUrl: 'assets/images/products/pr-01.jpg',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      oldPrice: '',
      isNew: true,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 2,
      imageUrl: 'assets/images/megamenu/pr-11.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/megamenu/pr-11.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-35.jpg' }
      ]
    },
    {
      id: 3,
      imageUrl: 'assets/images/megamenu/pr-03.jpg',
      title: 'Ridley High Waist',
      price: '$36.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 4,
      imageUrl: 'assets/images/products/pr-11.jpg',
      title: 'Women Black Pants',
      price: '$100.00',
      oldPrice: '',
      isNew: false,
      sizes: 'XS, S, M, L, XL',
      discount: false,
      colors: [] // No colors
    },
    {
      id: 5,
      imageUrl: 'assets/images/products/pr-33.jpg',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      oldPrice: '$60.00',
      isNew: false,
      sizes: 'XS, S, M',
      discount: true,
      colors: [
        { name: 'pink', imageUrl: 'assets/images/products/pr-33.jpg' },
        { name: 'black', imageUrl: 'assets/images/products/pr-34.jpg' }
      ]
    },
  ];
  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
    this.swiperService.initSwiper('.wishlistSwiper', 1, 0, 3000, 1, 1, 1);
  }

  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }

  constructor(private swiperService: SwiperService) { }

  color: string = 'Pink';
  size: string = 'M';
  quantity: number = 1;
  shake: boolean = false;

  changeColor(newColor: string, event: Event) {
    this.color = newColor;
    const target = event.target as HTMLElement;
    const siblings = target.parentElement?.children;
    if (siblings) {
      for (let sibling of Array.from(siblings)) {
        sibling.classList.remove('active');
      }
    }
    target.classList.add('active');
  }

  changeSize(newSize: string) {
    this.size = newSize;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.shake = true;
      setTimeout(() => {
        this.shake = false;
      }, 2000);
    }, 6000);
  }

}
