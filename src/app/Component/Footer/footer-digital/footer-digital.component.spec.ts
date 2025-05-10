import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDigitalComponent } from './footer-digital.component';

describe('FooterDigitalComponent', () => {
  let component: FooterDigitalComponent;
  let fixture: ComponentFixture<FooterDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
