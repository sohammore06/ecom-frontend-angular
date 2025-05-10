import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLookbookCollectionComponent } from './home-lookbook-collection.component';

describe('HomeLookbookCollectionComponent', () => {
  let component: HomeLookbookCollectionComponent;
  let fixture: ComponentFixture<HomeLookbookCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLookbookCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLookbookCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
