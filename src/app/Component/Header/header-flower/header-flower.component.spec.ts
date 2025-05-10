import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFlowerComponent } from './header-flower.component';

describe('HeaderFlowerComponent', () => {
  let component: HeaderFlowerComponent;
  let fixture: ComponentFixture<HeaderFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFlowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
