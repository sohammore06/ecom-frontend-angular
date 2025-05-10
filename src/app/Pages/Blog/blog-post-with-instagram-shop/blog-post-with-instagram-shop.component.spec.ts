import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostWithInstagramShopComponent } from './blog-post-with-instagram-shop.component';

describe('BlogPostWithInstagramShopComponent', () => {
  let component: BlogPostWithInstagramShopComponent;
  let fixture: ComponentFixture<BlogPostWithInstagramShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostWithInstagramShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostWithInstagramShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
