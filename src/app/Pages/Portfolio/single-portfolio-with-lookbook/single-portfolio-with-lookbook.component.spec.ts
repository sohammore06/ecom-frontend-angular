import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePortfolioWithLookbookComponent } from './single-portfolio-with-lookbook.component';

describe('SinglePortfolioWithLookbookComponent', () => {
  let component: SinglePortfolioWithLookbookComponent;
  let fixture: ComponentFixture<SinglePortfolioWithLookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePortfolioWithLookbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePortfolioWithLookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
