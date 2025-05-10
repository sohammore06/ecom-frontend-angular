import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-cosmetics',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-cosmetics.component.html',
    styleUrl: './footer-cosmetics.component.scss'
})
export class FooterCosmeticsComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
