import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSportComponent } from './footer-sport.component';

describe('FooterSportComponent', () => {
  let component: FooterSportComponent;
  let fixture: ComponentFixture<FooterSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
