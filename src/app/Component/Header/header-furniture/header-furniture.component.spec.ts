import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFurnitureComponent } from './header-furniture.component';

describe('HeaderFurnitureComponent', () => {
  let component: HeaderFurnitureComponent;
  let fixture: ComponentFixture<HeaderFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFurnitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
