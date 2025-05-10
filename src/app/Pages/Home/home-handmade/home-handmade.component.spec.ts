import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHandmadeComponent } from './home-handmade.component';

describe('HomeHandmadeComponent', () => {
  let component: HomeHandmadeComponent;
  let fixture: ComponentFixture<HomeHandmadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHandmadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHandmadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
