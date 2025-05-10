import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailProductVideoComponent } from './product-detail-product-video.component';

describe('ProductDetailProductVideoComponent', () => {
  let component: ProductDetailProductVideoComponent;
  let fixture: ComponentFixture<ProductDetailProductVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailProductVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailProductVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
