import { Component } from '@angular/core';
import { HeaderDecorComponent } from "../../../Component/Header/header-decor/header-decor.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-decor',
  imports: [RouterLink, CommonModule, HeaderDecorComponent, FooterComponent, CommonModule, PopupComponent, CardModelComponent],
  templateUrl: './home-decor.component.html',
  styleUrl: './home-decor.component.scss'
})
export class HomeDecorComponent {
  products = [
    {
      name: 'Form Egg Slicer',
      price: 35.00,
      originalPrice: null,
      discount: null,
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-09.jpg',
      hoverImage: 'assets/images/home-decor/pr-10.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Cymbal Pendant',
      price: 25.00,
      originalPrice: 35.00,
      discount: '-29%',
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-01.jpg',
      hoverImage: 'assets/images/home-decor/pr-02.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Chair Wood Legs',
      price: 30.00,
      originalPrice: null,
      discount: null,
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-03.jpg',
      hoverImage: 'assets/images/home-decor/pr-04.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Light Oil Lamp',
      price: 65.00,
      originalPrice: null,
      discount: null,
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-05.jpg',
      hoverImage: 'assets/images/home-decor/pr-06.jpg',
      link: 'product-detail-layout-01'
    }, {
      name: 'Buddy Table Lamp',
      price: 35.00,
      originalPrice: null,
      discount: null,
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-15.jpg',
      hoverImage: 'assets/images/home-decor/pr-16.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Picto Wall Clock',
      price: 15.00,
      originalPrice: null,
      discount: null,
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-17.jpg',
      hoverImage: 'assets/images/home-decor/pr-18.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Brush Set Small',
      price: 65.00,
      originalPrice: null,
      discount: null,
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-19.jpg',
      hoverImage: 'assets/images/home-decor/pr-20.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Cru Thermos Jug',
      price: 45.00,
      isHovered: false,
      originalPrice: null,
      discount: null,
      imageUrl: 'assets/images/home-decor/pr-21.jpg',
      hoverImage: 'assets/images/home-decor/pr-22.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Urkiola Bowl',
      price: 85.00,
      isHovered: false,
      originalPrice: null,
      discount: null,
      imageUrl: 'assets/images/home-decor/pr-23.jpg',
      hoverImage: 'assets/images/home-decor/pr-24.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Brush Set Small',
      price: 65.00,
      originalPrice: null,
      discount: null,
      isHovered: false,
      imageUrl: 'assets/images/home-decor/pr-19.jpg',
      hoverImage: 'assets/images/home-decor/pr-20.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Cru Thermos Jug',
      price: 45.00,
      isHovered: false,
      originalPrice: null,
      discount: null,
      imageUrl: 'assets/images/home-decor/pr-21.jpg',
      hoverImage: 'assets/images/home-decor/pr-22.jpg',
      link: 'product-detail-layout-01'
    },
    {
      name: 'Urkiola Bowl',
      price: 85.00,
      isHovered: false,
      originalPrice: null,
      discount: null,
      imageUrl: 'assets/images/home-decor/pr-23.jpg',
      hoverImage: 'assets/images/home-decor/pr-24.jpg',
      link: 'product-detail-layout-01'
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