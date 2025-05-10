import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDecor2Component } from './footer-decor2.component';

describe('FooterDecor2Component', () => {
  let component: FooterDecor2Component;
  let fixture: ComponentFixture<FooterDecor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDecor2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDecor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
