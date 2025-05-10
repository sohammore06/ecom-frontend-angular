import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { FooterLingerieComponent } from "../../../Component/Footer/footer-lingerie/footer-lingerie.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { HeaderLingeriesComponent } from "../../../Component/Header/header-lingeries/header-lingeries.component";
import { SwiperService } from '../../../Services/swiper.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal, Offcanvas } from 'bootstrap';

@Component({
    selector: 'app-home-lingeries',
    imports: [RouterLink, CommonModule, CardModelComponent, CommonModule, FooterLingerieComponent, PopupComponent, HeaderLingeriesComponent],
    templateUrl: './home-lingeries.component.html',
    styleUrl: './home-lingeries.component.scss'
})
export class HomeLingeriesComponent {
  products = [
    {
      id: 'pr-06',
      imageUrl: 'assets/images/home-lingerie/pr-06.jpg',
      hoverImage: 'assets/images/home-lingerie/pr-07.jpg',
      name: 'Jayme Bandeau Bikini Top',
      price: 32.00, isHovered: false,
      colors: ['white', 'dark', 'danger']
    },
    {
      id: 'pr-08',
      imageUrl: 'assets/images/home-lingerie/pr-08.jpg',
      hoverImage: 'assets/images/home-lingerie/pr-09.jpg',
      name: 'Turks One-Piece Swimsuit',
      price: 40.00, isHovered: false,
      colors: []
    },
    {
      id: 'pr-10',
      imageUrl: 'assets/images/home-lingerie/pr-10.jpg',
      hoverImage: 'assets/images/home-lingerie/pr-11.jpg',
      name: 'Seaside Bandeau Bikini Top',
      price: 42.00, isHovered: false,
      colors: ['white', 'green', 'blue']
    },
    {
      id: 'pr-12',
      imageUrl: 'assets/images/home-lingerie/pr-12.jpg',
      hoverImage: 'assets/images/home-lingerie/pr-13.jpg',
      name: 'Callie Off The Shoulder Bikini',
      price: 38.00, isHovered: false,
      colors: []
    },
    {
      id: 'pr-14',
      imageUrl: 'assets/images/home-lingerie/pr-14.jpg',
      hoverImage: 'assets/images/home-lingerie/pr-15.jpg',
      name: 'Zen Color Block One-piece',
      price: 29.99, isHovered: false,
      colors: []
    },
    {
      id: 'pr-16',
      imageUrl: 'assets/images/home-lingerie/pr-16.jpg',
      hoverImage: 'assets/images/home-lingerie/pr-17.jpg',
      name: 'Brooke Underwire Bikini',
      price: 39.99, isHovered: false,
      colors: []
    }
  ];
  imageUrl: string = 'assets/images/home-lingerie/pr-01.jpg';
  isHovered: boolean = false;

  // Method to handle mouse enter and leave
  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  // Method to change image on color selection
  changeImage(newImageUrl: string): void {
    this.imageUrl = newImageUrl;
    this.isHovered = false;
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
  constructor(private swiperService: SwiperService) { }

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.lingeriesSwiper', 1, 0, 3000, 1, 1, 1);
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
}
