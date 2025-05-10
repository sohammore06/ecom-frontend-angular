import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFlowerComponent } from './footer-flower.component';

describe('FooterFlowerComponent', () => {
  let component: FooterFlowerComponent;
  let fixture: ComponentFixture<FooterFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFlowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
