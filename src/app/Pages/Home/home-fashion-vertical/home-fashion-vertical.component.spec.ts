import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashionVerticalComponent } from './home-fashion-vertical.component';

describe('HomeFashionVerticalComponent', () => {
  let component: HomeFashionVerticalComponent;
  let fixture: ComponentFixture<HomeFashionVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFashionVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFashionVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
