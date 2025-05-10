import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-trend',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-trend.component.html',
    styleUrl: './footer-trend.component.scss'
})
export class FooterTrendComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
