import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDecorComponent } from './header-decor.component';

describe('HeaderDecorComponent', () => {
  let component: HeaderDecorComponent;
  let fixture: ComponentFixture<HeaderDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDecorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
