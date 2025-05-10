import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header06Component } from './header-06.component';

describe('Header06Component', () => {
  let component: Header06Component;
  let fixture: ComponentFixture<Header06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
