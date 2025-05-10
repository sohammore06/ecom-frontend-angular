import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElectricsComponent } from './header-electrics.component';

describe('HeaderElectricsComponent', () => {
  let component: HeaderElectricsComponent;
  let fixture: ComponentFixture<HeaderElectricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderElectricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderElectricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
