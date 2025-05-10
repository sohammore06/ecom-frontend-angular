import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { Modal, Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  products = [
    {
      imageUrl: 'assets/images/megamenu/pr-01.jpg',
      label: 'New',
      title: 'Analogue Resin Strap',
      price: '$30.00',
      size: 'XS, S, M, L, XL',
      discount: null
    },
    {
      imageUrl: 'assets/images/megamenu/pr-03.jpg',
      label: null,
      title: 'Ridley High Waist',
      price: '$36.00',
      size: 'XS, S, M, L, XL',
      discount: null
    },
    {
      imageUrl: 'assets/images/megamenu/pr-05.jpg',
      label: null,
      title: 'Blush Beanie',
      price: '$15.00',
      size: 'S, M, L',
      discount: null
    },
    {
      imageUrl: 'assets/images/megamenu/pr-07.jpg',
      label: '-25%',
      title: 'Cluse La Boheme Rose Gold',
      price: '$45.00',
      originalPrice: '$60.00',
      size: 'XS, S, M',
      discount: true
    },
    {
      imageUrl: 'assets/images/megamenu/pr-09.jpg',
      label: null,
      title: 'Mercury Tee',
      price: '$68.00',
      size: 'S, M',
      discount: null
    },
    {
      imageUrl: 'assets/images/megamenu/pr-11.jpg',
      label: '-34%',
      title: 'La Bohème Rose Gold',
      price: '$40.00',
      originalPrice: '$60.00',
      size: 'XS, S, M',
      discount: true
    }
  ];

  currentImageUrl: string = this.products[0].imageUrl;

  changeImage(newImageUrl: string) {
    this.currentImageUrl = newImageUrl;
  }
  constructor(private swiperService: SwiperService) { }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  activeDropdown: number | null = null;

  toggleDropdown(index: number) {
    this.activeDropdown = this.activeDropdown === index ? null : index;
  }
  modalInstances: { [key: string]: Modal } = {};

  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }
  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.headerSwiper', 1, 20, 3000, 2, 2, 4);
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
    this.swiperService.initThumbsSwiper('.productMain', '.productSmall');
    const offcanvasElements = document.querySelectorAll('.offcanvas');
    offcanvasElements.forEach((offcanvasElement) => {
      const offcanvasId = offcanvasElement.getAttribute('id');
      if (offcanvasId) {
        const offcanvas = new Offcanvas(offcanvasElement as HTMLElement);
        this.offcanvasInstances[offcanvasId] = offcanvas;
      }
    });
  }

  openOffcanvas(offcanvasId: string) {
    const offcanvas = this.offcanvasInstances[offcanvasId];
    if (offcanvas) {
      offcanvas.show();
    } else {
      console.error(`Offcanvas with ID '${offcanvasId}' not found 🔥`);
    }
  }

  closeModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.hide();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }


  closeOffcanvas(offcanvasId: string) {
    const offcanvas = this.offcanvasInstances[offcanvasId];
    if (offcanvas) {
      offcanvas.hide();
    } else {
      console.error(`Offcanvas with ID '${offcanvasId}' not found 🔥`);
    }
  }
}
