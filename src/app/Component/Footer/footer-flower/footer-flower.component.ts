import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-flower',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-flower.component.html',
    styleUrl: './footer-flower.component.scss'
})
export class FooterFlowerComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
