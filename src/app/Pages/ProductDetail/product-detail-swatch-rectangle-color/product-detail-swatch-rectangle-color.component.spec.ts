import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSwatchRectangleColorComponent } from './product-detail-swatch-rectangle-color.component';

describe('ProductDetailSwatchRectangleColorComponent', () => {
  let component: ProductDetailSwatchRectangleColorComponent;
  let fixture: ComponentFixture<ProductDetailSwatchRectangleColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSwatchRectangleColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSwatchRectangleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
