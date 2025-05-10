import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../Services/swiper.service';

@Component({
    selector: 'app-blog-masonry',
    imports: [TopBannerComponent, HeaderComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './blog-masonry.component.html',
    styleUrl: './blog-masonry.component.scss'
})
export class BlogMasonryComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.gridSwiper', 1, 0, 3000, 1, 2, 3);
  }
}
