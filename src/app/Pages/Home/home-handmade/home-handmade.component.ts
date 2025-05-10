import { Component, Renderer2 } from '@angular/core';
import { SwiperService } from '../../../Services/swiper.service';
import { HeaderHandmadeComponent } from "../../../Component/Header/header-handmade/header-handmade.component";
import { FooterHandmadeComponent } from "../../../Component/Footer/footer-handmade/footer-handmade.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-home-handmade',
    imports: [RouterLink, CommonModule, HeaderHandmadeComponent, CommonModule, FooterHandmadeComponent, PopupComponent, CardModelComponent],
    templateUrl: './home-handmade.component.html',
    styleUrl: './home-handmade.component.scss'
})
export class HomeHandmadeComponent {
  constructor(private renderer: Renderer2, private swiperService: SwiperService) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'font-futura');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'font-futura');
  }

  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.handmadeSwiper', 1, 0, 3000, 1, 1, 1);
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
  }

  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }

  slides = [
    {
      image: 'assets/images/home-hand-made/slide-01.png',
      title: 'Handcraft Shop',
      subtitle: 'Inspired by Your Sweetest Dreams',
      buttonText: 'Explore Now',
      buttonLink: 'shop'
    },
    {
      image: 'assets/images/home-hand-made/slide-02.jpg',
      title: 'Spring Sale',
      subtitle: 'Daily Recipes for Your Health',
      buttonText: 'Discovery',
      buttonLink: 'shop'
    },
    {
      image: 'assets/images/home-hand-made/slide-03.jpg',
      title: 'Handmade Store',
      subtitle: 'Decorative Box for New Aspiration',
      buttonText: 'Explore Now',
      buttonLink: 'shop'
    }
  ];
  products = [
    {
      name: 'Pendant Key Ornaments',
      imageUrl: 'assets/images/home-hand-made/pr-01.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-01.jpg',
      originalPrice: 35.00,
      isHovered: false,
      discount: "20%"
    },
    {
      name: 'Abstract Folded Pots',
      imageUrl: 'assets/images/home-hand-made/pr-02.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-03.jpg',
      originalPrice: 52.00,
      isHovered: false,
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
    }
  ];
  products2 = [
    {
      name: 'Pendant Key Ornaments',
      imageUrl: 'assets/images/home-hand-made/pr-01.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-01.jpg',
      originalPrice: 35.00,
      isHovered: false,
    },
    {
      name: 'Abstract Folded Pots',
      imageUrl: 'assets/images/home-hand-made/pr-02.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-03.jpg',
      originalPrice: 52.00,
      isHovered: false,
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
      discount: "20%"
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
    }
  ];
  products3 = [
    {
      name: 'Pendant Key Ornaments',
      imageUrl: 'assets/images/home-hand-made/pr-01.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-01.jpg',
      originalPrice: 35.00,
      isHovered: false,
    },
    {
      name: 'Abstract Folded Pots',
      imageUrl: 'assets/images/home-hand-made/pr-02.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-03.jpg',
      originalPrice: 52.00,
      isHovered: false,
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
      discount: "20%"
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
    }
  ];
  products4 = [
    {
      name: 'Pendant Key Ornaments',
      imageUrl: 'assets/images/home-hand-made/pr-01.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-01.jpg',
      originalPrice: 35.00,
      isHovered: false,
      discount: "20%"
    },
    {
      name: 'Abstract Folded Pots',
      imageUrl: 'assets/images/home-hand-made/pr-02.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-03.jpg',
      originalPrice: 52.00,
      isHovered: false,
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
    },
    {
      name: 'Adhesive Tape Dispenser',
      imageUrl: 'assets/images/home-hand-made/pr-04.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 15.00,
      isHovered: false,
    },
    {
      name: 'Antique Sewing Scissors',
      imageUrl: 'assets/images/home-hand-made/pr-06.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-06.jpg',
      originalPrice: 15.00,
      discountPrice: 12.00,
      isHovered: false,
    },
    {
      name: 'Bouncer Measuring Cup',
      imageUrl: 'assets/images/home-hand-made/pr-08.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-05.jpg',
      originalPrice: 350.00,
      isHovered: false,
      discount: "10%"
    },
    {
      name: 'Stylish Handcrafted Vase',
      imageUrl: 'assets/images/home-hand-made/pr-09.jpg',
      hoverImage: 'assets/images/home-hand-made/pr-09.jpg',
      originalPrice: 60.00,
      isHovered: false,
    }
  ];

  toggleHover(product: any, state: boolean) {
    product.isHovered = state;
  }


}
