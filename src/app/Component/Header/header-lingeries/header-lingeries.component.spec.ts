import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLingeriesComponent } from './header-lingeries.component';

describe('HeaderLingeriesComponent', () => {
  let component: HeaderLingeriesComponent;
  let fixture: ComponentFixture<HeaderLingeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLingeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLingeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
