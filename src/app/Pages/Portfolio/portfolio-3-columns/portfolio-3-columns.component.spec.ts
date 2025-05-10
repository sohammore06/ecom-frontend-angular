import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio3ColumnsComponent } from './portfolio-3-columns.component';

describe('Portfolio3ColumnsComponent', () => {
  let component: Portfolio3ColumnsComponent;
  let fixture: ComponentFixture<Portfolio3ColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio3ColumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio3ColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
