import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailProductStickyComponent } from './product-detail-product-sticky.component';

describe('ProductDetailProductStickyComponent', () => {
  let component: ProductDetailProductStickyComponent;
  let fixture: ComponentFixture<ProductDetailProductStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailProductStickyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailProductStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
