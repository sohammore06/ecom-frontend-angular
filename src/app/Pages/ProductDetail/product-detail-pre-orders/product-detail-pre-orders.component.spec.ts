import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPreOrdersComponent } from './product-detail-pre-orders.component';

describe('ProductDetailPreOrdersComponent', () => {
  let component: ProductDetailPreOrdersComponent;
  let fixture: ComponentFixture<ProductDetailPreOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailPreOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailPreOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
