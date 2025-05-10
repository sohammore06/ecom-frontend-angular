import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShoesComponent } from './header-shoes.component';

describe('HeaderShoesComponent', () => {
  let component: HeaderShoesComponent;
  let fixture: ComponentFixture<HeaderShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
