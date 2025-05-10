import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHiddenSidebarComponent } from './shop-hidden-sidebar.component';

describe('ShopHiddenSidebarComponent', () => {
  let component: ShopHiddenSidebarComponent;
  let fixture: ComponentFixture<ShopHiddenSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopHiddenSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHiddenSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
