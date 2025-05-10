import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailBackInStockNotificationComponent } from './product-detail-back-in-stock-notification.component';

describe('ProductDetailBackInStockNotificationComponent', () => {
  let component: ProductDetailBackInStockNotificationComponent;
  let fixture: ComponentFixture<ProductDetailBackInStockNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailBackInStockNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailBackInStockNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
