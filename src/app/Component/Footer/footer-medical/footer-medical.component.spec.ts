import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMedicalComponent } from './footer-medical.component';

describe('FooterMedicalComponent', () => {
  let component: FooterMedicalComponent;
  let fixture: ComponentFixture<FooterMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
