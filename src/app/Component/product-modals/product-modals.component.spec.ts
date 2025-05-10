import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalsComponent } from './product-modals.component';

describe('ProductModalsComponent', () => {
  let component: ProductModalsComponent;
  let fixture: ComponentFixture<ProductModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductModalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
