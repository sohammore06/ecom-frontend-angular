import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailThumbBottomComponent } from './product-detail-thumb-bottom.component';

describe('ProductDetailThumbBottomComponent', () => {
  let component: ProductDetailThumbBottomComponent;
  let fixture: ComponentFixture<ProductDetailThumbBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailThumbBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailThumbBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
