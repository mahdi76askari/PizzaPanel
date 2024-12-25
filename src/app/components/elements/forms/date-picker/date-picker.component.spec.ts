import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBirthdayComponent } from './date-picker.component';

describe('InputBirthdayComponent', () => {
  let component: InputBirthdayComponent;
  let fixture: ComponentFixture<InputBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBirthdayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
