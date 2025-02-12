import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticismsComponent } from './criticisms.component';

describe('CriticismsComponent', () => {
  let component: CriticismsComponent;
  let fixture: ComponentFixture<CriticismsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticismsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriticismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
