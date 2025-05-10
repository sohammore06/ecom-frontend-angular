import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElectricComponent } from './header-electric.component';

describe('HeaderElectricComponent', () => {
  let component: HeaderElectricComponent;
  let fixture: ComponentFixture<HeaderElectricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderElectricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
