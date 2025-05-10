import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJewelryComponent } from './header-jewelry.component';

describe('HeaderJewelryComponent', () => {
  let component: HeaderJewelryComponent;
  let fixture: ComponentFixture<HeaderJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderJewelryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderJewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
