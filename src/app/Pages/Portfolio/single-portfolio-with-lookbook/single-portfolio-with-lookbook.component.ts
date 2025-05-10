import { Component } from '@angular/core';
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { SwiperService } from '../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-single-portfolio-with-lookbook',
    imports: [RouterLink, CommonModule, PopupComponent, CardModelComponent, FooterComponent, HeaderComponent, TopBannerComponent],
    templateUrl: './single-portfolio-with-lookbook.component.html',
    styleUrl: './single-portfolio-with-lookbook.component.scss'
})
export class SinglePortfolioWithLookbookComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.shopSwiper', 1, 0, 3000, 1, 2, 3);
  }
}
