import { Component } from '@angular/core';
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';

@Component({
  selector: 'app-shop-collection',
  imports: [RouterLink, CommonModule, FooterComponent, PopupComponent, TopBannerComponent, HeaderComponent],
  templateUrl: './shop-collection.component.html',
  styleUrl: './shop-collection.component.scss'
})
export class ShopCollectionComponent {
  selectedColor: string = 'Pink';
  selectedSize: string = 'M';
  quantity: number = 1;

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    console.log(`Added to cart: Color - ${this.selectedColor}, Size - ${this.selectedSize}, Quantity - ${this.quantity}`);
  }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.quickViewSwiper', 1, 0, 3000, 1, 1, 1);
  }

  constructor(private swiperService: SwiperService) { }

}
