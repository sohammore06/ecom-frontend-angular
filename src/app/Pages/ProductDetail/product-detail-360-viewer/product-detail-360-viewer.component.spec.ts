import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail360ViewerComponent } from './product-detail-360-viewer.component';

describe('ProductDetail360ViewerComponent', () => {
  let component: ProductDetail360ViewerComponent;
  let fixture: ComponentFixture<ProductDetail360ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail360ViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetail360ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
