import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFashion09Component } from './header-fashion-09.component';

describe('HeaderFashion09Component', () => {
  let component: HeaderFashion09Component;
  let fixture: ComponentFixture<HeaderFashion09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFashion09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFashion09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
