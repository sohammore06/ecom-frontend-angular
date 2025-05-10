import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterParallaxComponent } from './footer-parallax.component';

describe('FooterParallaxComponent', () => {
  let component: FooterParallaxComponent;
  let fixture: ComponentFixture<FooterParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterParallaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
