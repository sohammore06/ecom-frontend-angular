import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailLayout03Component } from './product-detail-layout-03.component';

describe('ProductDetailLayout03Component', () => {
  let component: ProductDetailLayout03Component;
  let fixture: ComponentFixture<ProductDetailLayout03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailLayout03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailLayout03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
