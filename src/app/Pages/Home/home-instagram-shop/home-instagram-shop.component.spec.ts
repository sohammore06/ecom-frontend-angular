import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstagramShopComponent } from './home-instagram-shop.component';

describe('HomeInstagramShopComponent', () => {
  let component: HomeInstagramShopComponent;
  let fixture: ComponentFixture<HomeInstagramShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInstagramShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInstagramShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
