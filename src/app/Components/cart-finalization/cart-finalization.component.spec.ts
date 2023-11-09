import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFinalizationComponent } from './cart-finalization.component';

describe('CartFinalizationComponent', () => {
  let component: CartFinalizationComponent;
  let fixture: ComponentFixture<CartFinalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartFinalizationComponent]
    });
    fixture = TestBed.createComponent(CartFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
