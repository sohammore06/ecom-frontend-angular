import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRtlComponent } from './home-rtl.component';

describe('HomeRtlComponent', () => {
  let component: HomeRtlComponent;
  let fixture: ComponentFixture<HomeRtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
