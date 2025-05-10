import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBagComponent } from './home-bag.component';

describe('HomeBagComponent', () => {
  let component: HomeBagComponent;
  let fixture: ComponentFixture<HomeBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
