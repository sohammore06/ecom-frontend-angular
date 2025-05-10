import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-decor2',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-decor2.component.html',
    styleUrl: './footer-decor2.component.scss'
})
export class FooterDecor2Component {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
