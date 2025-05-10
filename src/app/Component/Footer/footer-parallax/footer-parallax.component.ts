import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-parallax',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-parallax.component.html',
    styleUrl: './footer-parallax.component.scss'
})
export class FooterParallaxComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
