import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridListSwitcherComponent } from './shop-grid-list-switcher.component';

describe('ShopGridListSwitcherComponent', () => {
  let component: ShopGridListSwitcherComponent;
  let fixture: ComponentFixture<ShopGridListSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopGridListSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopGridListSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
