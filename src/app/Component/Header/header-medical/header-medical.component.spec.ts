import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMedicalComponent } from './header-medical.component';

describe('HeaderMedicalComponent', () => {
  let component: HeaderMedicalComponent;
  let fixture: ComponentFixture<HeaderMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
