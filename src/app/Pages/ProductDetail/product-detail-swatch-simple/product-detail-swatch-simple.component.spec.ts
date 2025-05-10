import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSwatchSimpleComponent } from './product-detail-swatch-simple.component';

describe('ProductDetailSwatchSimpleComponent', () => {
  let component: ProductDetailSwatchSimpleComponent;
  let fixture: ComponentFixture<ProductDetailSwatchSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSwatchSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSwatchSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
