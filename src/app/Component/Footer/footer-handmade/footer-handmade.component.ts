import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-handmade',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-handmade.component.html',
    styleUrl: './footer-handmade.component.scss'
})
export class FooterHandmadeComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
