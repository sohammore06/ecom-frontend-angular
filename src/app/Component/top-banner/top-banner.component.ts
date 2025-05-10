import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-top-banner',
    imports: [CommonModule],
    templateUrl: './top-banner.component.html',
    styleUrl: './top-banner.component.scss'
})
export class TopBannerComponent {
  isOpen = true;

  @Input() className: string = '';

}
