import { Component } from '@angular/core';
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { SwiperService } from '../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lookbook-in-page',
    imports: [RouterLink, CommonModule, HeaderComponent, TopBannerComponent, PopupComponent, CardModelComponent, FooterComponent],
    templateUrl: './lookbook-in-page.component.html',
    styleUrl: './lookbook-in-page.component.scss'
})
export class LookbookInPageComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.shopSwiper', 1, 0, 3000, 1, 2, 3);
    this.swiperService.initSwiper('.mySwiper', 1, 0, 3000, 1, 2, 3);
  }
}
