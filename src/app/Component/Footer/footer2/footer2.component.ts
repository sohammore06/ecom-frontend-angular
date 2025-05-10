import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ResponsiveFooterComponent } from "../responsive-footer/responsive-footer.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer2',
    imports: [RouterLink, CommonModule, ResponsiveFooterComponent],
    templateUrl: './footer2.component.html',
    styleUrl: './footer2.component.scss'
})
export class Footer2Component {
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
