import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDescriptionWithLookbookComponent } from './product-detail-description-with-lookbook.component';

describe('ProductDetailDescriptionWithLookbookComponent', () => {
  let component: ProductDetailDescriptionWithLookbookComponent;
  let fixture: ComponentFixture<ProductDetailDescriptionWithLookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailDescriptionWithLookbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailDescriptionWithLookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
