import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDecor2Component } from './header-decor2.component';

describe('HeaderDecor2Component', () => {
  let component: HeaderDecor2Component;
  let fixture: ComponentFixture<HeaderDecor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDecor2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDecor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
