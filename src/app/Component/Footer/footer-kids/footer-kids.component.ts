import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-kids',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-kids.component.html',
    styleUrl: './footer-kids.component.scss'
})
export class FooterKidsComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
