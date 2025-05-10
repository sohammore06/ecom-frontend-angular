import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { Header2Component } from "../../../Component/Header/header2/header2.component";
import { LatestBlogComponent } from "../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../Component/follow-instagram/follow-instagram.component";
import { ShippingComponent } from "../../../Component/shipping/shipping.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { RouterLink } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-instagram-shop',
    imports: [RouterLink, CommonModule, TopBannerComponent, CommonModule, Header2Component, LatestBlogComponent, FollowInstagramComponent, ShippingComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './home-instagram-shop.component.html',
    styleUrl: './home-instagram-shop.component.scss'
})
export class HomeInstagramShopComponent {
  instaItems = [
    {
      image: 'assets/images/home-instagram-shop/bg-pin-01.jpg',
      pins: [{ position: 'position-03', label: '1' }]
    },
    {
      image: 'assets/images/home-instagram-shop/bg-pin-02.jpg',
      pins: [
        { position: 'position-02', label: '1' },
        { position: 'position-05', label: '2' }
      ]
    },
    {
      image: 'assets/images/home-instagram-shop/bg-pin-03.jpg',
      pins: [{ position: 'position-08', label: '1' }]
    },
    {
      image: 'assets/images/home-instagram-shop/bg-pin-04.jpg',
      pins: [{ position: 'position-07', label: '1' }]
    },
    {
      image: 'assets/images/home-instagram-shop/bg-pin-05.jpg',
      pins: [{ position: 'position-02', label: '1' }]
    },
    {
      image: 'assets/images/home-instagram-shop/bg-pin-06.jpg',
      pins: [{ position: 'position-02', label: '1' }]
    },
    {
      image: 'assets/images/home-instagram-shop/bg-pin-07.jpg',
      pins: [{ position: 'position-02', label: '1' }]
    },
    {
      image: 'assets/images/home-instagram-shop/bg-pin-08.jpg',
      pins: [{ position: 'position-06', label: '1' }]
    }
  ];
  categories = [
    { title: 'Footwear', image: 'assets/images/home-categories-links/cat-bn-01.jpeg' },
    { title: 'Bags', image: 'assets/images/home-categories-links/cat-bn-02.jpg' },
    { title: 'Watches', image: 'assets/images/home-categories-links/cat-bn-03.jpg' },
    { title: 'Caps & Hats', image: 'assets/images/home-categories-links/cat-bn-04.jpg' }
  ];

  selectedImage: string = 'assets/images/home-classic/pr-big-24.jpg';

  updateImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
  
  ngAfterViewInit() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      this.modalInstance = new Modal(modalElement);
    }
  }

  modalInstance!: Modal;

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }
}
