import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeader01Component } from './home-header-01.component';

describe('HomeHeader01Component', () => {
  let component: HomeHeader01Component;
  let fixture: ComponentFixture<HomeHeader01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeader01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeader01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
