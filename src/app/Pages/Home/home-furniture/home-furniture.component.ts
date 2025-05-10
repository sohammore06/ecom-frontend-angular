import { Component } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterFurnitureComponent } from "../../../Component/Footer/footer-furniture/footer-furniture.component";
import { HeaderFurnitureComponent } from "../../../Component/Header/header-furniture/header-furniture.component";
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home-furniture',
  imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, FooterFurnitureComponent, CommonModule, HeaderFurnitureComponent],
  templateUrl: './home-furniture.component.html',
  styleUrl: './home-furniture.component.scss'
})
export class HomeFurnitureComponent {
  imageUrl: string = 'assets/images/home-furniture/pr-07.jpg';
  isHovered: boolean = false;
  products = [
    {
      imageUrl: 'assets/images/home-furniture/pr-01.jpg',
      name: 'Hans Wegner Style Elbow Chair',
      price: '$300.00',
      sale: null
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-02.png',
      name: 'Rook Tripod Table Lamp Wooden',
      price: '$620.00',
      sale: '-23%',
      oldPrice: '$800.00'
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-03.png',
      name: 'Flow Table Lamp EU Spainmboo Chair',
      price: '$110.00',
      sale: null
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-04.png',
      name: '3-seater sofa w/ chaiselong',
      price: '$680.00',
      sale: null
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-05.png',
      name: 'Liby Sage Green',
      price: '$100.00',
      sale: null
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-06.jpg',
      name: 'Andie Light Grey Oak Legs',
      price: '$910.00',
      sale: null
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

  constructor(private swiperService: SwiperService) { }
  ngOnInit() {
    this.swiperService.initSwiper('.productSwiper', 1, 0, 3000, 1, 2, 3);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5, // Set your speed for the parallax effect
    });
  }

  products2 = [
    {
      imageUrl: 'assets/images/home-furniture/pr-01.jpg',
      title: 'Hans Wegner Style Elbow Chair',
      price: '$300.00',
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-05.png',
      title: 'Liby Sage Green',
      price: '$100.00',
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-06.jpg',
      title: 'Andie Light Grey Oak Legs',
      price: '$910.00',
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-04.png',
      title: '3-seater sofa w/ chaiselong',
      price: '$680.00',
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-11.jpg',
      title: 'Fabio Antracit',
      price: '$420.00',
      link: 'product-detail-layout-01'
    },
    {
      imageUrl: 'assets/images/home-furniture/pr-02.png',
      title: 'Retro Dining Rectangle',
      price: '$300.00',
      link: 'product-detail-layout-01'
    }
  ];

}
