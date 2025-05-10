import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoriesLinksComponent } from './home-categories-links.component';

describe('HomeCategoriesLinksComponent', () => {
  let component: HomeCategoriesLinksComponent;
  let fixture: ComponentFixture<HomeCategoriesLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCategoriesLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCategoriesLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
