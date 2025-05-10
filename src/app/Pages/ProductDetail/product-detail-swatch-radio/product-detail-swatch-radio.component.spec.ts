import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSwatchRadioComponent } from './product-detail-swatch-radio.component';

describe('ProductDetailSwatchRadioComponent', () => {
  let component: ProductDetailSwatchRadioComponent;
  let fixture: ComponentFixture<ProductDetailSwatchRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSwatchRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSwatchRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
