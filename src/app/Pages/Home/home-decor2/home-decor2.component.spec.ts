import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecor2Component } from './home-decor2.component';

describe('HomeDecor2Component', () => {
  let component: HomeDecor2Component;
  let fixture: ComponentFixture<HomeDecor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDecor2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDecor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
