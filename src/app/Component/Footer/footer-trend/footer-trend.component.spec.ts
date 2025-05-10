import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTrendComponent } from './footer-trend.component';

describe('FooterTrendComponent', () => {
  let component: FooterTrendComponent;
  let fixture: ComponentFixture<FooterTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
