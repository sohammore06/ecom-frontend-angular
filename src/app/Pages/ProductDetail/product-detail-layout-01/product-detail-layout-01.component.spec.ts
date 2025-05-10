import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailLayout01Component } from './product-detail-layout-01.component';

describe('ProductDetailLayout01Component', () => {
  let component: ProductDetailLayout01Component;
  let fixture: ComponentFixture<ProductDetailLayout01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailLayout01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailLayout01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
