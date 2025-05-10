import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSportComponent } from './header-sport.component';

describe('HeaderSportComponent', () => {
  let component: HeaderSportComponent;
  let fixture: ComponentFixture<HeaderSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
