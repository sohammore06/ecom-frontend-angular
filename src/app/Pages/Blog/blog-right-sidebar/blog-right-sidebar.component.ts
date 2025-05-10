import { Component } from '@angular/core';
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { SwiperService } from '../../../Services/swiper.service';

@Component({
    selector: 'app-blog-right-sidebar',
    imports: [FooterComponent, PopupComponent, CardModelComponent, TopBannerComponent, HeaderComponent],
    templateUrl: './blog-right-sidebar.component.html',
    styleUrl: './blog-right-sidebar.component.scss'
})
export class BlogRightSidebarComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.gridSwiper', 1, 0, 3000, 1, 2, 3);
  }
}
