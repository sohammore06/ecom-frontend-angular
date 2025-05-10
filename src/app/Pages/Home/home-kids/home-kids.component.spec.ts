import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKidsComponent } from './home-kids.component';

describe('HomeKidsComponent', () => {
  let component: HomeKidsComponent;
  let fixture: ComponentFixture<HomeKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
