import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailLeftSidebarComponent } from './product-detail-left-sidebar.component';

describe('ProductDetailLeftSidebarComponent', () => {
  let component: ProductDetailLeftSidebarComponent;
  let fixture: ComponentFixture<ProductDetailLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailLeftSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
