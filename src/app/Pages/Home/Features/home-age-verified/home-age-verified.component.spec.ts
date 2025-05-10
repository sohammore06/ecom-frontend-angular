import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgeVerifiedComponent } from './home-age-verified.component';

describe('HomeAgeVerifiedComponent', () => {
  let component: HomeAgeVerifiedComponent;
  let fixture: ComponentFixture<HomeAgeVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAgeVerifiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAgeVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
