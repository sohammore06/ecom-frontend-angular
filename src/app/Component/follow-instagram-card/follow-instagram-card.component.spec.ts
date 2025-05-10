import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowInstagramCardComponent } from './follow-instagram-card.component';

describe('FollowInstagramCardComponent', () => {
  let component: FollowInstagramCardComponent;
  let fixture: ComponentFixture<FollowInstagramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowInstagramCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowInstagramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
