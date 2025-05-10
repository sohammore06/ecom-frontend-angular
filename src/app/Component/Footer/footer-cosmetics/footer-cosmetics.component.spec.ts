import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCosmeticsComponent } from './footer-cosmetics.component';

describe('FooterCosmeticsComponent', () => {
  let component: FooterCosmeticsComponent;
  let fixture: ComponentFixture<FooterCosmeticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCosmeticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
