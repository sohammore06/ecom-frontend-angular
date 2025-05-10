import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPackeryLayoutComponent } from './shop-packery-layout.component';

describe('ShopPackeryLayoutComponent', () => {
  let component: ShopPackeryLayoutComponent;
  let fixture: ComponentFixture<ShopPackeryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopPackeryLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPackeryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
