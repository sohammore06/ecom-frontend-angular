import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailThumbRightComponent } from './product-detail-thumb-right.component';

describe('ProductDetailThumbRightComponent', () => {
  let component: ProductDetailThumbRightComponent;
  let fixture: ComponentFixture<ProductDetailThumbRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailThumbRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailThumbRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
