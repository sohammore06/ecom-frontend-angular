import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailFullWidthAtcComponent } from './product-detail-full-width-atc.component';

describe('ProductDetailFullWidthAtcComponent', () => {
  let component: ProductDetailFullWidthAtcComponent;
  let fixture: ComponentFixture<ProductDetailFullWidthAtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailFullWidthAtcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailFullWidthAtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
