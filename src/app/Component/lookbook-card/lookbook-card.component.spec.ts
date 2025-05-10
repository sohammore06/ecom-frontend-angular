import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookbookCardComponent } from './lookbook-card.component';

describe('LookbookCardComponent', () => {
  let component: LookbookCardComponent;
  let fixture: ComponentFixture<LookbookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookbookCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookbookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
