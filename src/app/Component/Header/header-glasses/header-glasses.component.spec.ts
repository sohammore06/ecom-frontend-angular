import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGlassesComponent } from './header-glasses.component';

describe('HeaderGlassesComponent', () => {
  let component: HeaderGlassesComponent;
  let fixture: ComponentFixture<HeaderGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGlassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
