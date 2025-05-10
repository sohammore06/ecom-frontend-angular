import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBoxedComponent } from './header-boxed.component';

describe('HeaderBoxedComponent', () => {
  let component: HeaderBoxedComponent;
  let fixture: ComponentFixture<HeaderBoxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBoxedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
