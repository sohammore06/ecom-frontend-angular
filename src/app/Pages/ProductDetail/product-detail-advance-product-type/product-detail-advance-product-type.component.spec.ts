import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailAdvanceProductTypeComponent } from './product-detail-advance-product-type.component';

describe('ProductDetailAdvanceProductTypeComponent', () => {
  let component: ProductDetailAdvanceProductTypeComponent;
  let fixture: ComponentFixture<ProductDetailAdvanceProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailAdvanceProductTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailAdvanceProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
