import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookbookInPageComponent } from './lookbook-in-page.component';

describe('LookbookInPageComponent', () => {
  let component: LookbookInPageComponent;
  let fixture: ComponentFixture<LookbookInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookbookInPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookbookInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
