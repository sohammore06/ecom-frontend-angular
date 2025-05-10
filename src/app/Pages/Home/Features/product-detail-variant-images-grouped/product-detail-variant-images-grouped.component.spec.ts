import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailVariantImagesGroupedComponent } from './product-detail-variant-images-grouped.component';

describe('ProductDetailVariantImagesGroupedComponent', () => {
  let component: ProductDetailVariantImagesGroupedComponent;
  let fixture: ComponentFixture<ProductDetailVariantImagesGroupedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailVariantImagesGroupedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailVariantImagesGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
