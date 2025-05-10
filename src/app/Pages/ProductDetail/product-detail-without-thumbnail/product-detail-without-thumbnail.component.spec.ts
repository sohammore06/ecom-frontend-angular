import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailWithoutThumbnailComponent } from './product-detail-without-thumbnail.component';

describe('ProductDetailWithoutThumbnailComponent', () => {
  let component: ProductDetailWithoutThumbnailComponent;
  let fixture: ComponentFixture<ProductDetailWithoutThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailWithoutThumbnailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailWithoutThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
