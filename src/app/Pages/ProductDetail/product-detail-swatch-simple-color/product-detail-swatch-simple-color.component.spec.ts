import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSwatchSimpleColorComponent } from './product-detail-swatch-simple-color.component';

describe('ProductDetailSwatchSimpleColorComponent', () => {
  let component: ProductDetailSwatchSimpleColorComponent;
  let fixture: ComponentFixture<ProductDetailSwatchSimpleColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSwatchSimpleColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSwatchSimpleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
