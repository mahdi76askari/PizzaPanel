import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBoxComponent } from './food-box.component';

describe('FoodBoxComponent', () => {
  let component: FoodBoxComponent;
  let fixture: ComponentFixture<FoodBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
