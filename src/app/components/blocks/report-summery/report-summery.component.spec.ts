import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSummeryComponent } from './report-summery.component';

describe('ReportSummeryComponent', () => {
  let component: ReportSummeryComponent;
  let fixture: ComponentFixture<ReportSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportSummeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
