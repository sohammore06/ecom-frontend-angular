import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashionTrendComponent } from './home-fashion-trend.component';

describe('HomeFashionTrendComponent', () => {
  let component: HomeFashionTrendComponent;
  let fixture: ComponentFixture<HomeFashionTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFashionTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFashionTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
