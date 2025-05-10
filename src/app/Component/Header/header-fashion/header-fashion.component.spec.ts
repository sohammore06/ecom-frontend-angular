import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFashionComponent } from './header-fashion.component';

describe('HeaderFashionComponent', () => {
  let component: HeaderFashionComponent;
  let fixture: ComponentFixture<HeaderFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFashionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
