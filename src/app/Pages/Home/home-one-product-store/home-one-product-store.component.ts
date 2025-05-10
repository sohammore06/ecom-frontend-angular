import { Component, Renderer2 } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterStoreComponent } from "../../../Component/Footer/footer-store/footer-store.component";
import { HeaderProductStoreComponent } from "../../../Component/Header/header-product-store/header-product-store.component";
import { SwiperService } from '../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-one-product-store',
    imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, FooterStoreComponent, HeaderProductStoreComponent],
    templateUrl: './home-one-product-store.component.html',
    styleUrl: './home-one-product-store.component.scss'
})
export class HomeOneProductStoreComponent {
  constructor(private renderer: Renderer2, private swiperService: SwiperService) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'font-futura');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'font-futura');
  }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.productSwiper', 1, 0, 3000, 1, 1, 1);
  }
}
