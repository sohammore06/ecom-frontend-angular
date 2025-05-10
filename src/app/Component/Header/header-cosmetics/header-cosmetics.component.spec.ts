import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCosmeticsComponent } from './header-cosmetics.component';

describe('HeaderCosmeticsComponent', () => {
  let component: HeaderCosmeticsComponent;
  let fixture: ComponentFixture<HeaderCosmeticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCosmeticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
