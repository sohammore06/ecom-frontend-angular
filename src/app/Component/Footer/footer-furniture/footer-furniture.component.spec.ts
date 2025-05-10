import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFurnitureComponent } from './footer-furniture.component';

describe('FooterFurnitureComponent', () => {
  let component: FooterFurnitureComponent;
  let fixture: ComponentFixture<FooterFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFurnitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
