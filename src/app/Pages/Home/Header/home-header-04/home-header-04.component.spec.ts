import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeader04Component } from './home-header-04.component';

describe('HomeHeader04Component', () => {
  let component: HomeHeader04Component;
  let fixture: ComponentFixture<HomeHeader04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeader04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeader04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
