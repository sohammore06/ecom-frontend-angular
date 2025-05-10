import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-lingerie',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-lingerie.component.html',
    styleUrl: './footer-lingerie.component.scss'
})
export class FooterLingerieComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
