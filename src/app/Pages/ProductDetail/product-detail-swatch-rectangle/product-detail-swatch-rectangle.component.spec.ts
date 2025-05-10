import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSwatchRectangleComponent } from './product-detail-swatch-rectangle.component';

describe('ProductDetailSwatchRectangleComponent', () => {
  let component: ProductDetailSwatchRectangleComponent;
  let fixture: ComponentFixture<ProductDetailSwatchRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSwatchRectangleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSwatchRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
