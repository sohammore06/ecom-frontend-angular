import { Component } from '@angular/core';
import { SwiperService } from '../../Services/swiper.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-follow-instagram-card',
    imports: [CommonModule, CommonModule],
    templateUrl: './follow-instagram-card.component.html',
    styleUrl: './follow-instagram-card.component.scss'
})
export class FollowInstagramCardComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.cardSwiper', 1, 0, 3000, 2, 4, 6);
  }

  images: string[] = [
    'assets/images/instagram/ins1_14.jpg',
    'assets/images/instagram/ins1_8.jpg',
    'assets/images/instagram/ins1_1.jpg',
    'assets/images/instagram/ins1_6.jpg',
    'assets/images/instagram/ins1_5.jpg',
    'assets/images/instagram/ins1_4.jpg',
    'assets/images/instagram/ins1_2.jpg',
    'assets/images/instagram/ins1_13.jpg'
  ];

}
