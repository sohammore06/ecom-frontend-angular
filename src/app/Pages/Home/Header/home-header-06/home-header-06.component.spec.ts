import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeader06Component } from './home-header-06.component';

describe('HomeHeader06Component', () => {
  let component: HomeHeader06Component;
  let fixture: ComponentFixture<HomeHeader06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeader06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeader06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
