import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-dark',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-dark.component.html',
    styleUrl: './footer-dark.component.scss'
})
export class FooterDarkComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
