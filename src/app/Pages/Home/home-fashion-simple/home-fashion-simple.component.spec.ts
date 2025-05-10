import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashionSimpleComponent } from './home-fashion-simple.component';

describe('HomeFashionSimpleComponent', () => {
  let component: HomeFashionSimpleComponent;
  let fixture: ComponentFixture<HomeFashionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFashionSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFashionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
