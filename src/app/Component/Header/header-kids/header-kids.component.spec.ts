import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKidsComponent } from './header-kids.component';

describe('HeaderKidsComponent', () => {
  let component: HeaderKidsComponent;
  let fixture: ComponentFixture<HeaderKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
