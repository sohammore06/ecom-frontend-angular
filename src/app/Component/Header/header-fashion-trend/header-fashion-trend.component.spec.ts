import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFashionTrendComponent } from './header-fashion-trend.component';

describe('HeaderFashionTrendComponent', () => {
  let component: HeaderFashionTrendComponent;
  let fixture: ComponentFixture<HeaderFashionTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFashionTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFashionTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
