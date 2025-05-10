import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDescriptionWithInstagramShopComponent } from './product-detail-description-with-instagram-shop.component';

describe('ProductDetailDescriptionWithInstagramShopComponent', () => {
  let component: ProductDetailDescriptionWithInstagramShopComponent;
  let fixture: ComponentFixture<ProductDetailDescriptionWithInstagramShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailDescriptionWithInstagramShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailDescriptionWithInstagramShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
