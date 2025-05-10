import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSidebarFullHeightComponent } from './product-detail-sidebar-full-height.component';

describe('ProductDetailSidebarFullHeightComponent', () => {
  let component: ProductDetailSidebarFullHeightComponent;
  let fixture: ComponentFixture<ProductDetailSidebarFullHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSidebarFullHeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSidebarFullHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
