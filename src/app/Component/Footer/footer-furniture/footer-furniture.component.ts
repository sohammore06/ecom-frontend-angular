import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-furniture',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-furniture.component.html',
    styleUrl: './footer-furniture.component.scss'
})
export class FooterFurnitureComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
