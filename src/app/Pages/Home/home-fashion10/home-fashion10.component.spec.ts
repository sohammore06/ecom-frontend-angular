import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashion10Component } from './home-fashion10.component';

describe('HomeFashion10Component', () => {
  let component: HomeFashion10Component;
  let fixture: ComponentFixture<HomeFashion10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFashion10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFashion10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
