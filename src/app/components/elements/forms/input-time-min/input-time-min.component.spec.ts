/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputTimeMinComponent } from './input-time-min.component';

describe('InputTimeMinComponent', () => {
  let component: InputTimeMinComponent;
  let fixture: ComponentFixture<InputTimeMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTimeMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTimeMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
