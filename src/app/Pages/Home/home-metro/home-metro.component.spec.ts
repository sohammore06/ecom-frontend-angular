import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMetroComponent } from './home-metro.component';

describe('HomeMetroComponent', () => {
  let component: HomeMetroComponent;
  let fixture: ComponentFixture<HomeMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
