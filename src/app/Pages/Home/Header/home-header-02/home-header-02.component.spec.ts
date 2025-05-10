import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeader02Component } from './home-header-02.component';

describe('HomeHeader02Component', () => {
  let component: HomeHeader02Component;
  let fixture: ComponentFixture<HomeHeader02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeader02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeader02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
