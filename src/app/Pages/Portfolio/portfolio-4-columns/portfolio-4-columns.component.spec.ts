import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio4ColumnsComponent } from './portfolio-4-columns.component';

describe('Portfolio4ColumnsComponent', () => {
  let component: Portfolio4ColumnsComponent;
  let fixture: ComponentFixture<Portfolio4ColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio4ColumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio4ColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
