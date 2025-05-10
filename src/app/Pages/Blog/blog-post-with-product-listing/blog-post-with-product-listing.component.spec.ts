import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostWithProductListingComponent } from './blog-post-with-product-listing.component';

describe('BlogPostWithProductListingComponent', () => {
  let component: BlogPostWithProductListingComponent;
  let fixture: ComponentFixture<BlogPostWithProductListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostWithProductListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostWithProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
