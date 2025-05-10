import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { SwiperService } from '../../../Services/swiper.service';

@Component({
    selector: 'app-blog-left-sidebar',
    imports: [TopBannerComponent, HeaderComponent, FooterComponent, CardModelComponent, PopupComponent],
    templateUrl: './blog-left-sidebar.component.html',
    styleUrl: './blog-left-sidebar.component.scss'
})
export class BlogLeftSidebarComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.gridSwiper', 1, 0, 3000, 1, 2, 3);
  }
}
