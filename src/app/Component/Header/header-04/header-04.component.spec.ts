import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header04Component } from './header-04.component';

describe('Header04Component', () => {
  let component: Header04Component;
  let fixture: ComponentFixture<Header04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
