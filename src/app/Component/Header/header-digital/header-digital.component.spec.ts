import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDigitalComponent } from './header-digital.component';

describe('HeaderDigitalComponent', () => {
  let component: HeaderDigitalComponent;
  let fixture: ComponentFixture<HeaderDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
