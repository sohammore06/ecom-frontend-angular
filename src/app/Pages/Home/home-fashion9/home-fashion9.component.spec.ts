import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashion9Component } from './home-fashion9.component';

describe('HomeFashion9Component', () => {
  let component: HomeFashion9Component;
  let fixture: ComponentFixture<HomeFashion9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFashion9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFashion9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
