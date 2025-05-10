import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePortfolioWithShopComponent } from './single-portfolio-with-shop.component';

describe('SinglePortfolioWithShopComponent', () => {
  let component: SinglePortfolioWithShopComponent;
  let fixture: ComponentFixture<SinglePortfolioWithShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePortfolioWithShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePortfolioWithShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
