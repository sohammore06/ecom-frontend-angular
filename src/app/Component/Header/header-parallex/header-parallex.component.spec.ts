import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderParallexComponent } from './header-parallex.component';

describe('HeaderParallexComponent', () => {
  let component: HeaderParallexComponent;
  let fixture: ComponentFixture<HeaderParallexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderParallexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderParallexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
