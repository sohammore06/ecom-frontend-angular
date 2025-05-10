import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDecorComponent } from './footer-decor.component';

describe('FooterDecorComponent', () => {
  let component: FooterDecorComponent;
  let fixture: ComponentFixture<FooterDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDecorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
