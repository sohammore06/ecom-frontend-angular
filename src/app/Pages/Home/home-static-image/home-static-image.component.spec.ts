import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaticImageComponent } from './home-static-image.component';

describe('HomeStaticImageComponent', () => {
  let component: HomeStaticImageComponent;
  let fixture: ComponentFixture<HomeStaticImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStaticImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStaticImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
