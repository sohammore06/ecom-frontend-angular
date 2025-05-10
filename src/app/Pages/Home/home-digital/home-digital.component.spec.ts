import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDigitalComponent } from './home-digital.component';

describe('HomeDigitalComponent', () => {
  let component: HomeDigitalComponent;
  let fixture: ComponentFixture<HomeDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
