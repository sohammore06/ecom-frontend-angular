import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecentlyCardComponent } from './product-recently-card.component';

describe('ProductRecentlyCardComponent', () => {
  let component: ProductRecentlyCardComponent;
  let fixture: ComponentFixture<ProductRecentlyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRecentlyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecentlyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
