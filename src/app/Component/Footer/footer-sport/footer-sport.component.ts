import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-sport',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-sport.component.html',
    styleUrl: './footer-sport.component.scss'
})
export class FooterSportComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
