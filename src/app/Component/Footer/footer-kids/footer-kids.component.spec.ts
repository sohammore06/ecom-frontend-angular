import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKidsComponent } from './footer-kids.component';

describe('FooterKidsComponent', () => {
  let component: FooterKidsComponent;
  let fixture: ComponentFixture<FooterKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
