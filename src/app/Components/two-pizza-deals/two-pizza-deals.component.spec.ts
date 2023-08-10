import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPizzaDealsComponent } from './two-pizza-deals.component';

describe('TwoPizzaDealsComponent', () => {
  let component: TwoPizzaDealsComponent;
  let fixture: ComponentFixture<TwoPizzaDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoPizzaDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoPizzaDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
