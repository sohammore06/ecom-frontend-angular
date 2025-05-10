import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHandmadeComponent } from './header-handmade.component';

describe('HeaderHandmadeComponent', () => {
  let component: HeaderHandmadeComponent;
  let fixture: ComponentFixture<HeaderHandmadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHandmadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHandmadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
