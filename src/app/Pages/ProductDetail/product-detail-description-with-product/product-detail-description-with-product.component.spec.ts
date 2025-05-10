import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDescriptionWithProductComponent } from './product-detail-description-with-product.component';

describe('ProductDetailDescriptionWithProductComponent', () => {
  let component: ProductDetailDescriptionWithProductComponent;
  let fixture: ComponentFixture<ProductDetailDescriptionWithProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailDescriptionWithProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailDescriptionWithProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
