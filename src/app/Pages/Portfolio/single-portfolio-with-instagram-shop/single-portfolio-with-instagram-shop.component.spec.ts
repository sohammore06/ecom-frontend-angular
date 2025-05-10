import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePortfolioWithInstagramShopComponent } from './single-portfolio-with-instagram-shop.component';

describe('SinglePortfolioWithInstagramShopComponent', () => {
  let component: SinglePortfolioWithInstagramShopComponent;
  let fixture: ComponentFixture<SinglePortfolioWithInstagramShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePortfolioWithInstagramShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePortfolioWithInstagramShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
