import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-digital',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-digital.component.html',
    styleUrl: './footer-digital.component.scss'
})
export class FooterDigitalComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
