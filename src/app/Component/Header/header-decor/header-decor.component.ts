import { Modal, Offcanvas } from 'bootstrap';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-decor',
  imports: [RouterLink, CommonModule, CommonModule],
  templateUrl: './header-decor.component.html',
  styleUrl: './header-decor.component.scss'
})
export class HeaderDecorComponent {
  showMenuScroll = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showMenuScroll = window.pageYOffset > 0;
  }
  activeDropdown: number | null = null;

  toggleDropdown(index: number) {
    this.activeDropdown = this.activeDropdown === index ? null : index;
  }
  modalInstances: { [key: string]: Modal } = {};

  offcanvasInstances: { [key: string]: Offcanvas } = {};

  ngAfterViewInit(): void {
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach((modalElement) => {
      const modalId = modalElement.getAttribute('id')!;
      const modal = new Modal(modalElement as HTMLElement);
      this.modalInstances[modalId] = modal;
    });
    const offcanvasElements = document.querySelectorAll('.offcanvas');
    offcanvasElements.forEach((offcanvasElement) => {
      const offcanvasId = offcanvasElement.getAttribute('id');
      if (offcanvasId) {
        const offcanvas = new Offcanvas(offcanvasElement as HTMLElement);
        this.offcanvasInstances[offcanvasId] = offcanvas;
      }
    });
  }

  openOffcanvas(offcanvasId: string) {
    const offcanvas = this.offcanvasInstances[offcanvasId];
    if (offcanvas) {
      offcanvas.show();
    } else {
      console.error(`Offcanvas with ID '${offcanvasId}' not found 🔥`);
    }
  }
  openModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.show();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }
  
  closeModal(modalId: string) {
    const modal = this.modalInstances[modalId];
    if (modal) {
      modal.hide();
    } else {
      console.error(`Modal with ID '${modalId}' not found 😢`);
    }
  }
  closeOffcanvas(offcanvasId: string) {
    const offcanvas = this.offcanvasInstances[offcanvasId];
    if (offcanvas) {
      offcanvas.hide();
    } else {
      console.error(`Offcanvas with ID '${offcanvasId}' not found 🔥`);
    }
  }
}