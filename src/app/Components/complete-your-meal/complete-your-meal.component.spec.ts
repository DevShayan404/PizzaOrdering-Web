import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteYourMealComponent } from './complete-your-meal.component';

describe('CompleteYourMealComponent', () => {
  let component: CompleteYourMealComponent;
  let fixture: ComponentFixture<CompleteYourMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteYourMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteYourMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
