import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailGroupedProductComponent } from './product-detail-grouped-product.component';

describe('ProductDetailGroupedProductComponent', () => {
  let component: ProductDetailGroupedProductComponent;
  let fixture: ComponentFixture<ProductDetailGroupedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailGroupedProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailGroupedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
