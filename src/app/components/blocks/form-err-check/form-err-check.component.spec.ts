/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormErrCheckComponent } from './form-err-check.component';

describe('FormErrCheckComponent', () => {
  let component: FormErrCheckComponent;
  let fixture: ComponentFixture<FormErrCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormErrCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
