import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header02Component } from './header-02.component';

describe('Header02Component', () => {
  let component: Header02Component;
  let fixture: ComponentFixture<Header02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
