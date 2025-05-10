import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailFrequentlyBoughtTogetherComponent } from './product-detail-frequently-bought-together.component';

describe('ProductDetailFrequentlyBoughtTogetherComponent', () => {
  let component: ProductDetailFrequentlyBoughtTogetherComponent;
  let fixture: ComponentFixture<ProductDetailFrequentlyBoughtTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailFrequentlyBoughtTogetherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailFrequentlyBoughtTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
