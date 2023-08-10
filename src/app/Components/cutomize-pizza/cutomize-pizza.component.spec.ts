import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomizePizzaComponent } from './cutomize-pizza.component';

describe('CutomizePizzaComponent', () => {
  let component: CutomizePizzaComponent;
  let fixture: ComponentFixture<CutomizePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomizePizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomizePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
