import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-decor',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-decor.component.html',
    styleUrl: './footer-decor.component.scss'
})
export class FooterDecorComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
