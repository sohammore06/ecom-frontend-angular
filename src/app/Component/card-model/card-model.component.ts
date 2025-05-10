import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal, Offcanvas } from 'bootstrap';
import { SwiperService } from '../../Services/swiper.service';

@Component({
  selector: 'app-card-model',
  imports: [RouterLink, CommonModule],
  templateUrl: './card-model.component.html',
  styleUrl: './card-model.component.scss'
})
export class CardModelComponent {
  selectedColor: string = 'Grey';
  selectedSize: string = 'M';

  constructor(private swiperService: SwiperService) { }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }
  selectedColor2: string = 'Pink';
  selectedSize2: string = 'M';
  quantity: number = 1;
  shake: boolean = false;

  selectColor2(color: string) {
    this.selectedColor = color;
  }

  selectSize2(size: string) {
    this.selectedSize = size;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
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
  quantity1: number = 2;
  quantity2: number = 13;
  quantity3: number = 7;

  increaseQuantity1(quantityVar: 'quantity1' | 'quantity2' | 'quantity3'): void {
    if (this[quantityVar] < 9999) {
      this[quantityVar]++;
    }
  }

  decreaseQuantity1(quantityVar: 'quantity1' | 'quantity2' | 'quantity3'): void {
    if (this[quantityVar] > 1) {
      this[quantityVar]--;
    }
  }


  modalInstances: { [key: string]: Modal } = {};
  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;

      this.swiperService.initSwiper('.productJewellry', 1, 0, 3000, 1, 1, 1);
    });

    const offcanvasElements = document.querySelectorAll('.offcanvas');
    offcanvasElements.forEach((offcanvasElement) => {
      const offcanvasId = offcanvasElement.getAttribute('id');
      if (offcanvasId) {
        const offcanvas = new Offcanvas(offcanvasElement as HTMLElement);
        this.offcanvasInstances[offcanvasId] = offcanvas;
      }
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

  closeModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.hide();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }

  openOffcanvas(offcanvasId: string) {
    const offcanvas = this.offcanvasInstances[offcanvasId];
    if (offcanvas) {
      offcanvas.show();
    } else {
      console.error(`Offcanvas with ID '${offcanvasId}' not found 🔥`);
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