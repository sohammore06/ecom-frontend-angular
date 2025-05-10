import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPickupAvailabilityComponent } from './product-detail-pickup-availability.component';

describe('ProductDetailPickupAvailabilityComponent', () => {
  let component: ProductDetailPickupAvailabilityComponent;
  let fixture: ComponentFixture<ProductDetailPickupAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailPickupAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailPickupAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
