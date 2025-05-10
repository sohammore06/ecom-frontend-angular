import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostWithLookbookComponent } from './blog-post-with-lookbook.component';

describe('BlogPostWithLookbookComponent', () => {
  let component: BlogPostWithLookbookComponent;
  let fixture: ComponentFixture<BlogPostWithLookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostWithLookbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostWithLookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
