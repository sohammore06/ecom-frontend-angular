import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerCosmeticsComponent } from './top-banner-cosmetics.component';

describe('TopBannerCosmeticsComponent', () => {
  let component: TopBannerCosmeticsComponent;
  let fixture: ComponentFixture<TopBannerCosmeticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBannerCosmeticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBannerCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
