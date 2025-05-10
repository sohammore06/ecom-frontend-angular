import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductStoreComponent } from './header-product-store.component';

describe('HeaderProductStoreComponent', () => {
  let component: HeaderProductStoreComponent;
  let fixture: ComponentFixture<HeaderProductStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderProductStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderProductStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
