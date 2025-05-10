import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-custome-header',
    imports: [RouterLink,],
    templateUrl: './custome-header.component.html',
    styleUrl: './custome-header.component.scss'
})
export class CustomeHeaderComponent {
  modalInstances: { [key: string]: Modal } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
  }

  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }
