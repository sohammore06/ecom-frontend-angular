import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBagComponent } from './header-bag.component';

describe('HeaderBagComponent', () => {
  let component: HeaderBagComponent;
  let fixture: ComponentFixture<HeaderBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
