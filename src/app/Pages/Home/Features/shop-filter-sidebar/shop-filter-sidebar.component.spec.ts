import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFilterSidebarComponent } from './shop-filter-sidebar.component';

describe('ShopFilterSidebarComponent', () => {
  let component: ShopFilterSidebarComponent;
  let fixture: ComponentFixture<ShopFilterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFilterSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
