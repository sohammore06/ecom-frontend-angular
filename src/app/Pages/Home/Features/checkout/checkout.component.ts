import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../Component/Header/header/header.component";
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { FooterComponent } from "../../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-checkout',
    imports: [CommonModule, HeaderComponent, TopBannerComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
