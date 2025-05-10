import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSimpleProductComponent } from './product-detail-simple-product.component';

describe('ProductDetailSimpleProductComponent', () => {
  let component: ProductDetailSimpleProductComponent;
  let fixture: ComponentFixture<ProductDetailSimpleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSimpleProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSimpleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
