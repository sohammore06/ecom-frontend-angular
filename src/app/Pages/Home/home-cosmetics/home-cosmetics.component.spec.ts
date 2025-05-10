import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCosmeticsComponent } from './home-cosmetics.component';

describe('HomeCosmeticsComponent', () => {
  let component: HomeCosmeticsComponent;
  let fixture: ComponentFixture<HomeCosmeticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCosmeticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
