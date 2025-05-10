import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJewelryComponent } from './home-jewelry.component';

describe('HomeJewelryComponent', () => {
  let component: HomeJewelryComponent;
  let fixture: ComponentFixture<HomeJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeJewelryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeJewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
