import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailFullWidthComponent } from './product-detail-full-width.component';

describe('ProductDetailFullWidthComponent', () => {
  let component: ProductDetailFullWidthComponent;
  let fixture: ComponentFixture<ProductDetailFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailFullWidthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
