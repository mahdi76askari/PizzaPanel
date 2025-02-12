import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProcessComponent } from './delivery-process.component';

describe('DeliveryProcessComponent', () => {
  let component: DeliveryProcessComponent;
  let fixture: ComponentFixture<DeliveryProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
