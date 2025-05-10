import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterShoesComponent } from "../../../Component/Footer/footer-shoes/footer-shoes.component";
import { HeaderShoesComponent } from "../../../Component/Header/header-shoes/header-shoes.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-shoes',
  imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, CommonModule, FooterShoesComponent, HeaderShoesComponent],
  templateUrl: './home-shoes.component.html',
  styleUrl: './home-shoes.component.scss'
})
export class HomeShoesComponent {
  products = [
    {
      imageUrl: 'assets/images/home-shoes/pr-04.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-13.jpg',
      name: 'Adidas Zapatillas Calcetin',
      price: '$122.00',
      salePrice: null,
      discount: null,
      isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-03.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-04.jpg',
      name: 'Deluxe Brand Uomo Slide Hi Tops',
      price: '$635.00',
      salePrice: '$452.00',
      discount: '-29%', isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-14.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-18.jpg',
      name: 'Deluxe Brand Donna Super Star Scarpe',
      price: '$52.00',
      salePrice: null,
      discount: null, isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-13.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-03.jpg',
      name: 'Gold Foil Chunky Leather Sneakers',
      price: '$309.00',
      salePrice: null,
      discount: null, isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-16.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-17.jpg',
      name: 'Vans Classic Slip-on Shoes',
      price: '$149.00',
      salePrice: '$99.00',
      discount: '-34%', isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-18.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-16.jpg',
      name: 'Adidas Copa Primeknit Sneakers',
      price: '$289.00',
      salePrice: null, isHovered: false,
      discount: null,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-19.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-18.jpg',
      name: 'Premiata Hattori Sneakers',
      price: '$289.00',
      salePrice: null,
      discount: null, isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-20.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-01.jpg',
      name: 'Urban Street Reverse Logo Sneakers',
      price: '$299.00',
      salePrice: null,
      discount: null, isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-21.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-20.jpg',
      name: 'Givenchy Paris Strap Sneakers',
      price: '$237.00',
      salePrice: null,
      discount: null, isHovered: false,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-06.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-21.jpg',
      name: 'Saint Laurent Classic Embroidered Sneakers',
      price: '$347.00',
      salePrice: null, isHovered: false,
      discount: null,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-01.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-02.jpg',
      name: 'Givenchy Logo Print Low-top Sneakers',
      price: '$152.00',
      salePrice: null, isHovered: false,
      discount: null,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-05.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-06.jpg',
      name: 'Sperry Men\'s 2-Eye Boat Shoes',
      price: '$52.00',
      salePrice: null, isHovered: false,
      discount: null,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-06.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-21.jpg',
      name: 'Saint Laurent Classic Embroidered Sneakers',
      price: '$347.00', isHovered: false,
      salePrice: null,
      discount: null,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-01.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-02.jpg',
      name: 'Givenchy Logo Print Low-top Sneakers',
      price: '$152.00',
      salePrice: null, isHovered: false,
      discount: null,
      detailUrl: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-shoes/pr-05.jpg',
      hoverImageUrl: 'assets/images/home-shoes/pr-06.jpg',
      name: 'Sperry Men\'s 2-Eye Boat Shoes',
      price: '$52.00',
      salePrice: null, isHovered: false,
      discount: null,
      detailUrl: 'product-detail-layout-01'
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