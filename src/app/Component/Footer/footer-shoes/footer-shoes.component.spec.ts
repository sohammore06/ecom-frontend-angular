import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterShoesComponent } from './footer-shoes.component';

describe('FooterShoesComponent', () => {
  let component: FooterShoesComponent;
  let fixture: ComponentFixture<FooterShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
