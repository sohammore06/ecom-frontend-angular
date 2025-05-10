import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowInstagramComponent } from './follow-instagram.component';

describe('FollowInstagramComponent', () => {
  let component: FollowInstagramComponent;
  let fixture: ComponentFixture<FollowInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowInstagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
