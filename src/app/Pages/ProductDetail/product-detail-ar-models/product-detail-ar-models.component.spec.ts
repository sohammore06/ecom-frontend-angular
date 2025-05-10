import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailArModelsComponent } from './product-detail-ar-models.component';

describe('ProductDetailArModelsComponent', () => {
  let component: ProductDetailArModelsComponent;
  let fixture: ComponentFixture<ProductDetailArModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailArModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailArModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
