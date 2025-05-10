import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOneProductStoreComponent } from './home-one-product-store.component';

describe('HomeOneProductStoreComponent', () => {
  let component: HomeOneProductStoreComponent;
  let fixture: ComponentFixture<HomeOneProductStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOneProductStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOneProductStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
