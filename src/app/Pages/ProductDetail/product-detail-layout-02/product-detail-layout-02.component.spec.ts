import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailLayout02Component } from './product-detail-layout-02.component';

describe('ProductDetailLayout02Component', () => {
  let component: ProductDetailLayout02Component;
  let fixture: ComponentFixture<ProductDetailLayout02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailLayout02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailLayout02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
