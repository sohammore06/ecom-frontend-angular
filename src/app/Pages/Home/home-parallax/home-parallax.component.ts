import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { FooterParallaxComponent } from "../../../Component/Footer/footer-parallax/footer-parallax.component";
import { HeaderParallexComponent } from "../../../Component/Header/header-parallex/header-parallex.component";
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { jarallax } from 'jarallax';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-parallax',
    imports: [RouterLink, CommonModule, CardModelComponent, PopupComponent, FooterParallaxComponent, HeaderParallexComponent],
    templateUrl: './home-parallax.component.html',
    styleUrl: './home-parallax.component.scss'
})
export class HomeParallaxComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });
    }
  }
}
