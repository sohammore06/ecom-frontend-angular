import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLingeriesComponent } from './home-lingeries.component';

describe('HomeLingeriesComponent', () => {
  let component: HomeLingeriesComponent;
  let fixture: ComponentFixture<HomeLingeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLingeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLingeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
