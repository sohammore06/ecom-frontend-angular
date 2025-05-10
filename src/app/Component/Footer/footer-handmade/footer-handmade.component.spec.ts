import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHandmadeComponent } from './footer-handmade.component';

describe('FooterHandmadeComponent', () => {
  let component: FooterHandmadeComponent;
  let fixture: ComponentFixture<FooterHandmadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterHandmadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHandmadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
