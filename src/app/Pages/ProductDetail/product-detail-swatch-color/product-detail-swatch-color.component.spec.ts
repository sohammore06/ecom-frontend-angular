import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSwatchColorComponent } from './product-detail-swatch-color.component';

describe('ProductDetailSwatchColorComponent', () => {
  let component: ProductDetailSwatchColorComponent;
  let fixture: ComponentFixture<ProductDetailSwatchColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSwatchColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSwatchColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
