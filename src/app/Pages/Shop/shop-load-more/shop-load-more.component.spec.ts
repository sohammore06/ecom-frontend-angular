import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLoadMoreComponent } from './shop-load-more.component';

describe('ShopLoadMoreComponent', () => {
  let component: ShopLoadMoreComponent;
  let fixture: ComponentFixture<ShopLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopLoadMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
