import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideoBannerComponent } from './home-video-banner.component';

describe('HomeVideoBannerComponent', () => {
  let component: HomeVideoBannerComponent;
  let fixture: ComponentFixture<HomeVideoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeVideoBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVideoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
