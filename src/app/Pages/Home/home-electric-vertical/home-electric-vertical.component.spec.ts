import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElectricVerticalComponent } from './home-electric-vertical.component';

describe('HomeElectricVerticalComponent', () => {
  let component: HomeElectricVerticalComponent;
  let fixture: ComponentFixture<HomeElectricVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeElectricVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeElectricVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
