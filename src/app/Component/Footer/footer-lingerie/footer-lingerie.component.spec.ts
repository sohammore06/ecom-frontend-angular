import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLingerieComponent } from './footer-lingerie.component';

describe('FooterLingerieComponent', () => {
  let component: FooterLingerieComponent;
  let fixture: ComponentFixture<FooterLingerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLingerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLingerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
