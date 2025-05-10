import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElectricComponent } from './home-electric.component';

describe('HomeElectricComponent', () => {
  let component: HomeElectricComponent;
  let fixture: ComponentFixture<HomeElectricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeElectricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
