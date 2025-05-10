import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLikeCardComponent } from './product-like-card.component';

describe('ProductLikeCardComponent', () => {
  let component: ProductLikeCardComponent;
  let fixture: ComponentFixture<ProductLikeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLikeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLikeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
