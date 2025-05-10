import { Component } from '@angular/core';
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio-4-columns',
    imports: [RouterLink, CommonModule, HeaderComponent, FooterComponent, PopupComponent, CardModelComponent, TopBannerComponent],
    templateUrl: './portfolio-4-columns.component.html',
    styleUrl: './portfolio-4-columns.component.scss'
})
export class Portfolio4ColumnsComponent {

}
