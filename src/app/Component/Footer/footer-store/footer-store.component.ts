import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-store',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-store.component.html',
    styleUrl: './footer-store.component.scss'
})
export class FooterStoreComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
