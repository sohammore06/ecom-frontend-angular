import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGlassesComponent } from './home-glasses.component';

describe('HomeGlassesComponent', () => {
  let component: HomeGlassesComponent;
  let fixture: ComponentFixture<HomeGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGlassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
