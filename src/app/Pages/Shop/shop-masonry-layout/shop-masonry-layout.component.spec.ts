import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMasonryLayoutComponent } from './shop-masonry-layout.component';

describe('ShopMasonryLayoutComponent', () => {
  let component: ShopMasonryLayoutComponent;
  let fixture: ComponentFixture<ShopMasonryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopMasonryLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMasonryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
