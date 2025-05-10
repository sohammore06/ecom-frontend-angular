import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-shoes',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-shoes.component.html',
    styleUrl: './footer-shoes.component.scss'
})
export class FooterShoesComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
