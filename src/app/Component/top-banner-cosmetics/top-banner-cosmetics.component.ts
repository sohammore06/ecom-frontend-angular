import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-top-banner-cosmetics',
    imports: [CommonModule],
    templateUrl: './top-banner-cosmetics.component.html',
    styleUrl: './top-banner-cosmetics.component.scss'
})
export class TopBannerCosmeticsComponent {
  isOpen: boolean = true;
}
