import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClassicComponent } from './home-classic.component';

describe('HomeClassicComponent', () => {
  let component: HomeClassicComponent;
  let fixture: ComponentFixture<HomeClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
