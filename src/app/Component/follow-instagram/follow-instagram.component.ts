import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperService } from '../../Services/swiper.service';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-follow-instagram',
    imports: [CommonModule, CommonModule],
    templateUrl: './follow-instagram.component.html',
    styleUrl: './follow-instagram.component.scss'
})
export class FollowInstagramComponent {
  instagramImages = [
    { src: 'assets/images/instagram/ins1_14.jpg', label: '1', positionClass: 'position-01' },
    { src: 'assets/images/instagram/ins1_8.jpg', label: '1', positionClass: 'position-02' },
    { src: 'assets/images/instagram/ins1_1.jpg', label: '1', positionClass: 'position-03' },
    { src: 'assets/images/instagram/ins1_1.jpg', label: '2', positionClass: 'position-04' },
    { src: 'assets/images/instagram/ins1_6.jpg', label: '1', positionClass: 'position-05' },
    { src: 'assets/images/instagram/ins1_5.jpg', label: '1', positionClass: 'position-06' },
    { src: 'assets/images/instagram/ins1_4.jpg', label: '1', positionClass: 'position-07' },
    { src: 'assets/images/instagram/ins1_2.jpg', label: '1', positionClass: 'position-02' },
    { src: 'assets/images/instagram/ins1_13.jpg', label: '1', positionClass: 'position-02' }
  ];

  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.instaSwiper', 1, 0, 3000, 2, 4, 6);
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
