import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailExternalAffiliateComponent } from './product-detail-external-affiliate.component';

describe('ProductDetailExternalAffiliateComponent', () => {
  let component: ProductDetailExternalAffiliateComponent;
  let fixture: ComponentFixture<ProductDetailExternalAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailExternalAffiliateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailExternalAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
