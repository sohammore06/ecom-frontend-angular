import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLookbookComponent } from './home-lookbook.component';

describe('HomeLookbookComponent', () => {
  let component: HomeLookbookComponent;
  let fixture: ComponentFixture<HomeLookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLookbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
