import { Component } from '@angular/core';
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-medical',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer-medical.component.html',
    styleUrl: './footer-medical.component.scss'
})
export class FooterMedicalComponent {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
