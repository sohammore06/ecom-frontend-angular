import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailRightSidebarComponent } from './product-detail-right-sidebar.component';

describe('ProductDetailRightSidebarComponent', () => {
  let component: ProductDetailRightSidebarComponent;
  let fixture: ComponentFixture<ProductDetailRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailRightSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
