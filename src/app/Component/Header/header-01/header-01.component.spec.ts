import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header01Component } from './header-01.component';

describe('Header01Component', () => {
  let component: Header01Component;
  let fixture: ComponentFixture<Header01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
