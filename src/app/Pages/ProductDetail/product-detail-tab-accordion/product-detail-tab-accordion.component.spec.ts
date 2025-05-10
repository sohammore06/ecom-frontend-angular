import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailTabAccordionComponent } from './product-detail-tab-accordion.component';

describe('ProductDetailTabAccordionComponent', () => {
  let component: ProductDetailTabAccordionComponent;
  let fixture: ComponentFixture<ProductDetailTabAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailTabAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailTabAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
