import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSwatchRadioColorComponent } from './product-detail-swatch-radio-color.component';

describe('ProductDetailSwatchRadioColorComponent', () => {
  let component: ProductDetailSwatchRadioColorComponent;
  let fixture: ComponentFixture<ProductDetailSwatchRadioColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSwatchRadioColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSwatchRadioColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
