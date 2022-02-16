import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStampFourComponent } from './time-stamp-four.component';

describe('TimeStampFourComponent', () => {
  let component: TimeStampFourComponent;
  let fixture: ComponentFixture<TimeStampFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStampFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStampFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
