import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFullWidthLayoutComponent } from './shop-full-width-layout.component';

describe('ShopFullWidthLayoutComponent', () => {
  let component: ShopFullWidthLayoutComponent;
  let fixture: ComponentFixture<ShopFullWidthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFullWidthLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFullWidthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
